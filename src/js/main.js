"use strict";

// Theme class (no changes needed)
class Theme {
  constructor(toBindListener) {
    select(toBindListener).addEventListener("click", this.change.bind(this));
    this.htmlDatasets = select("html").dataset;
    this.colorSchemas = ["one", "two"];
    this.idx = 0;
    this.change();
  }

  change() {
    const theme = this.colorSchemas[this.idx % this.colorSchemas.length];
    this.htmlDatasets.theme = theme;
    this.idx++;
  }
}

// DOM manipulation helper functions
function select(item) {
  return document.querySelector(item);
}

function selectAll(item) {
  return document.querySelectorAll(item);
}

function create(element) {
  return document.createElement(element);
}

function cl(item) {
  console.log(item);
}

function cd(item) {
  console.dir(item);
}

// Variables
const nextButton = select(".btn-next");
const formSubDesc = select(".form-sub-desc");
const stepFourSubmitInfo = select(".step-four-submit-info");
const stepFiveSubmitInfo = select(".step-five-submit-info");
const formSteps = selectAll(".form-step");
let active = 1;
const allInputValues = {}; // Object to store all input values

// Disable the Next button initially
if (nextButton) {
  nextButton.disabled = true;

  // Event listener for the next button
  nextButton.addEventListener("click", () => {
    if (validateStep()) {
      logInputValues(); // Log the input values when the Next button is clicked
      active++;
      if (active > formSteps.length) {
        logAllInputValues(); // Log all input values at the end
        active = formSteps.length;
      }
      updateProgress();
    }
  });
}
// Event listener for input changes
formSteps.forEach((step) => {
  step.addEventListener("input", validateStep);
});

// Function to validate the current step
function validateStep() {
  const currentStep = formSteps[active - 1];
  if (!currentStep) return;
  const inputs = currentStep.querySelectorAll("input, select, textarea");
  let isValid = true;

  inputs.forEach((input) => {
    if (input.type === "radio") {
      // For radio buttons, at least one should be checked
      const name = input.name;
      if (!currentStep.querySelector(`input[name="${name}"]:checked`)) {
        isValid = false;
      }
    } else if (input.value === "" || input.value === null) {
      // For other inputs, ensure they are not empty
      isValid = false;
    }
  });

  nextButton.disabled = !isValid;
  return isValid;
}

// Function to log input values for the current step
function logInputValues() {
  const currentStep = formSteps[active - 1];
  const inputs = currentStep.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    // Get the associated question for the input
    const questionLabel = input
      .closest("fieldset")
      .querySelector("label")
      .textContent.trim();

    if (input.type === "radio" && input.checked) {
      allInputValues[questionLabel] = input.value; // Store question and value in object
    } else if (input.type !== "radio") {
      allInputValues[questionLabel] = input.value; // Store question and value in object
      if (input.name === "firstname" || input.name === "lastname") {
        // Handle first and last name inputs separately
        allInputValues[questionLabel] = `${select("#firstname").value} ${
          select("#lastname").value
        }`;
      }
    }
  });

  cl(`Input Values for Step ${active}:`);
  for (const [key, value] of Object.entries(allInputValues)) {
    cl(`${key}: ${value}`);
  }
}

// Function to log all input values (no changes needed)
function logAllInputValues() {
  cl("All Input Values:");
  for (const [key, value] of Object.entries(allInputValues)) {
    cl(`${key}: ${value}`);
  }

  // Store the form data in localStorage
  localStorage.setItem("formData", JSON.stringify(allInputValues));

  // Navigate to the confirmation page
  window.location.href = "/src/confirmation.html";
}

// Function to update progress
const updateProgress = () => {
  cl(`formSteps.length => ${formSteps.length}`);
  cl(`active step => ${active}`);

  // Update the button text based on the current step
  if (active === formSteps.length) {
    nextButton.textContent = "Get Free Consult";
    formSubDesc.textContent = "Enter your details for a free consult.";
    stepFiveSubmitInfo.classList.remove("hidden");
    stepFourSubmitInfo.classList.add("hidden");
  } else if (active === formSteps.length - 1) {
    nextButton.textContent = "Last step";
    stepFourSubmitInfo.classList.remove("hidden");
  } else {
    nextButton.textContent = "Next Step";
  }

  // Toggle .active class for each step
  formSteps.forEach((step, i) => {
    if (i + 1 == active) {
      step.classList.add("active");
      // cl(`i => ${+i}`);
    } else {
      step.classList.remove("active");
    }
  });

  // Re-validate the current step to update the Next button state
  validateStep();
};

// Initial validation check
validateStep();
