// Retrieve the form data from localStorage
const formData = JSON.parse(localStorage.getItem("formData"));

// Function to display the form data on the confirmation page
function displayFormData() {
  const confirmationDetails = document.querySelector(".confirmation-details");
  for (const [key, value] of Object.entries(formData)) {
    const containerDiv = document.createElement("div");

    const keyDiv = document.createElement("div");
    keyDiv.classList.add("key");
    keyDiv.textContent = key;

    const valueDiv = document.createElement("div");
    valueDiv.classList.add("value");
    valueDiv.textContent = value;

    containerDiv.appendChild(keyDiv);
    containerDiv.appendChild(valueDiv);

    confirmationDetails.appendChild(containerDiv);
  }
}

// Function to handle the Go Back button click
function goBack() {
  window.location.href = "/"; // Redirect to the index page
}

// Call the function to display the form data
displayFormData();
