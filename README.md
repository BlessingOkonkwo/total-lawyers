# Total-Lawyers Project

## Description

This project is a multi-step form that lets users schedule a free legal consult by guiding them through a series of questions, ensuring that all fields are completed before progressing to the next step. The form is designed to be responsive, offering an optimal user experience on both mobile (max 767px) and desktop (min 768px) screens. As users navigate through the form, their input is logged to the console, providing a clear record of their progress. Upon completing the final step, users are directed to a confirmation page that displays all the information they provided.

## Technologies Used

- **HTML**: Structure and layout of the form and pages.
- **SASS (SCSS)**: Styling of the form, including responsive design and theming.
- **JavaScript**: Logic for form validation, step progression, and logging form values to the console.

## Features

- **Responsive Design**: 
  - The form is fully responsive and adapts to two screen sizes:
    - **Mobile**: Up to 767px.
    - **Desktop**: 768px and above.
- **Form Validation**: 
  - Validation is implemented to ensure that all fields in each step are filled before the user is allowed to proceed to the next step.
- **Console Logging**: 
  - Form steps and values are logged to the console as the user progresses, providing a record of user input.
- **Confirmation Page**: 
  - After completing the last step, a confirmation page is displayed, summarizing all the information provided by the user.
- **Animated Transitions**:
  - Form steps smoothly fade in as they become active, enhancing the user experience.

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/BlessingOkonkwo/total-lawyers.git
   ```
2. Navigate to the project directory:
   ```bash
   cd total-lawyers
   ```
3. Open the `index.html` file in your browser to view the form.

## Usage

- **Navigating the Form**:
  - Fill in the fields for each step. 
  - Click the "Next" button to proceed to the next step. 
  - The "Next" button will be disabled if any fields are left empty.
- **Viewing Console Logs**:
  - Open your browser's developer tools to view the form values logged as you progress through the steps.
- **Confirmation Page**:
  - Upon completing the final step, a confirmation page will display all the information you've provided.

## Contribution

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure your code adheres to the existing style and includes appropriate comments.

## License

This project is open-source and available under the [MIT License](LICENSE).
