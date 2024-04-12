# UnipeAuth React Native Application

This README provides detailed instructions on how to set up, install, and run the UnipeAuth React Native application developed using Expo. The application is developed using  Mac M2 Pro device with specific software versions and dependencies.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

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

## Contributing

Contributions are welcome. Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push your branch and open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
