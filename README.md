# UnipeAuth React Native Application

This README provides detailed instructions on how to set up, install, and run the UnipeAuth React Native application developed using Expo. The application is developed using  Mac M2 Pro device with specific software versions and dependencies.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Additional Information](#additional-information)
- [Testing Instructions](#testing-instructions)

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: v20.3.1
- **NPM**: v9.6.7
- **Android Studio**: Flamingo | 2022.2.1 Patch 2
- **Android Emulator**: Pixel 6 Pro API 34 | arm64

## Installation

1. **Clone the Repository**: Copy the UnipeAuth folder to your desired system.

2. **Install Dependencies**: Navigate to the UnipeAuth directory and run `npm install` to install all necessary packages.

3. **Android Studio Configuration**: Ensure the Android Studio path is correctly set in the `android/local.properties` file.

## Running the Application

To run the application on an Android emulator, execute the following command:

```bash
npx expo run:android
```

## Project Structure

The project is structured as follows:

- `src`: Contains all the source code.
 - `components`: Reusable UI components.
 - `constants`: Static data or dummy data.
 - `hooks`: Custom hooks.
 - `routes`: Application routes.
 - `screens`: Screen components based on tabs and auth-flow.
 - `store`: Redux store using Redux Toolkit.
 - `utils`: Reusable functions or logic.

## Customization

To change the app logo, splash screen, or app name, modify the `app.json` file.

# Development Build Instructions

This section provides a step-by-step guide on how to create a development build of this project using Expo's EAS CLI.
For more detailed information refer to the [EAS Build documentation](https://docs.expo.dev/build/setup/#install-the-latest-eas-cli).

Open this link on your Android devices (or scan the QR code) to [install the app:](
https://expo.dev/accounts/haryanvidev/projects/UnipeAuth/builds/44481b9d-0979-4d34-a570-1fb591076004)
and  run `npx expo start --dev-client`


## Additional Information

### Authentication Flow

The application implements a comprehensive authentication flow, including:

- **Login**: Users can log in using their registered credentials.
- **Registration**: New users can register by providing their phone number, username, and password. The registration screen also includes a button to navigate directly to the login screen.
- **Verify OTP**: After registration, users are prompted to verify their phone number via OTP. The application uses the Google Identity SMS Retriever API to auto-detect the OTP. If auto-detection fails, users can manually enter the OTP.
- **Forgot Password**: Users can reset their password if they forget it.

### Main Application Features

The main application features include:

- **Bottom Tabs Navigation**: The app is divided into four main sections accessible via bottom tabs.
- **Settings Tab**: Includes options to log out, view logged-in user details, and delete the account. The delete account option prompts for confirmation before proceeding.

### Data Storage and State Management

- **React-Redux with Redux-Persist**: The application uses Redux for state management and Redux-Persist to persist user data across sessions.
- **No Backend**: The application does not rely on a backend for data storage or authentication.

### User Interface and Validation

- **Tamagui**: The UI components are created using Tamagui.
- **React-Native-Flash-Messages**: Toast notifications are implemented using React-Native-Flash-Messages.
- **Formik and Yup**: Form validations are handled using Formik and Yup. Validation rules are defined in the `validations.js` file within the `constants` folder.

### Authentication Logic

- **Username and Password Validation**: The application checks if the username exists in Redux and throws an error if it does. It also validates the password and redirects the user to the appropriate screen based on the validation results.
- **OTP Verification**: The OTP verification process includes auto-detection using the Google Identity SMS Retriever API. If auto-detection fails, users can manually enter the OTP. The application handles edge cases such as expired OTPs and displays error messages accordingly.
- **Back Navigation Handling**: The application checks if the user is not verified and trying to login then user will be redirected back to  the verifyOTPScreen.
- **Token Generation**: A function for generating tokens using the username and password is included in the `utils` folder.

### Navigation and Routing

- **React Navigation**: The application uses React Navigation for navigation with proper configurations defined in the `routes` folder. This includes `AuthStacks`, `RootStacks`, and `MainStacks`.


## Testing Instructions

To effectively test the UnipeAuth React Native application, especially the OTP verification feature, follow these detailed instructions:

### Testing the Registration Screen

- **Validations**: Ensure you adhere to the validation rules while creating a user on the registration screen. This includes providing a valid phone number, username, and password.
- **Error and Success Messages**: Test various scenarios to ensure that the application correctly displays error and success flash messages. This includes cases where the username already exists, the OTP is incorrect, or the verification process is successful.

### Testing OTP Auto-Detection

- **Generating a Hash**: Upon successful registration, a hash will be generated. Check the terminal or console logs for this hash.
- **Using the Hash**: If you are using an Android emulator, append this hash to the end of an SMS message. The SMS should be formatted to trigger the OTP auto-detection feature.
- **Triggering the SMS**: Send the SMS to the emulator. If the hash matches, the application should auto-detect the OTP and mark the user as verified.
- **Manual OTP Entry**: If auto-detection fails, ensure the application allows users to manually enter the OTP.

### Testing on a Real Device

- **Sending SMS to a Real Device**: If you want to test on a real device, append the hash to the end of an SMS message and send it to the testing device. The application should then auto-detect the OTP and proceed with the verification process.

### Additional Test Scenarios

- **Back Navigation**: Test the application's behavior when navigating back from the verification screen to the login screen without verification. The application should redirect the user back to the verification screen.
- **Login and Forgot Password**: Test the login and forgot password flows to ensure they work as expected.

### Note on OTP Verification

- **No Backend**: Since there is no backend, the application uses a hardcoded OTP or code (`123456`) for verification. Ensure this code is used for testing purposes.

### Reaching Out for Support

- **Discussion**: If you encounter any difficulties running the project or have questions, feel free to reach out for a detailed discussion.

### Conclusion

These testing instructions provide a comprehensive guide to evaluating the UnipeAuth React Native application, focusing on the registration and OTP verification processes. By following these steps, you can ensure the application functions as intended and meets the requirements outlined in the assignment document.

This README provides a comprehensive overview of the UnipeAuth React Native application, including its authentication flow, main application features, data storage and state management, user interface and validation, authentication logic, and navigation and routing. It is designed to be clear and concise, providing all the necessary information for developers to understand and run the application.
