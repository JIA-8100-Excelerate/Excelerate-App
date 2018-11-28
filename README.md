# Excelerate
React Native App (for iOS) for Excelerate Junior Design project

## Release Notes
### Version 1.0
#### New features for this release
- Mentees can set goals for themselves.
- Mentees can update, complete and delete their goals.
- Mentees can view and delete completed goals (accomplishments).
- Mentors can add mentees to their profiles.
- Mentors can view their mentees’ goals and make comments.
- Mentors can view their mentees' completed goals (accomplishments).
- Mentees can view comments given by their mentors.
- Users can update their profiles, changing email, firstname, lastname and password.

#### Bugs fixed since last release
N/A. This is the first release.

#### Known bugs and defects
- The server is currently deployed on Heroku on the free plan, so it sleeps after 30 minutes of inactivity. If a user tries to login when the server is sleeping, it takes about 30 seconds for the server to wake.
- The button sizes are fixed, so the screen often does not scale appropriately to smaller screens.
- Functionality promised but not included in this release
  - Mentors set goals for themselves
  - Calendar integration
  - Admin functionalities

## Install Guide
The Excelerate App uses an open-source toolchain for React Native called [Expo](https://expo.io/). Expo can be leveraged to develop and build a mobile application on any operating system that supports Node.js and the Expo toolchain (Windows, macOS, most major Linux distros).

### Prerequisities and Dependent Libraries
1. Install Node.js (version 6 or newer). Node.js can be installed using your operating system’s package manager, or using a [standalone installation](https://nodejs.org/en/).
2. Install the Expo Command Line Interface (CLI), the tool for developing and building apps with Expo. Install by running `npm install -g expo-cli` in your Terminal.

### Downloading the Source Code
The source code can be downloaded as a `.zip` file from this repository, or [cloned using git](https://help.github.com/articles/cloning-a-repository/).

### Using Expo for Development
1. The Expo Client is a mobile application used to view projects during development. Expo uses their servers to host your application without the need to build the app.
The Expo Client can be found on the iOS App Store and Google Play Store by searching for “Expo Client.”
2. Before running your app for the first time, make sure you are in the directory that contains your app, then run `npm install` in Terminal to install the required dependencies listed in [`package-lock.json`](https://github.com/JIA-8100-Excelerate/Excelerate-App/blob/master/package-lock.json).
3. Run `expo start`. Expo will launch a dashboard in your browser.
4. In order to run the application on your phone, open an app that scans QR codes on your phone, and scan the code from the dashboard. Follow the generated link, and the application will open in the Expo Client app.

The app will Live-Reload every time an update to your code is made and saved.

### Build Instructions
To create a standalone binary of the Excelerate App for iOS:
1. Run `expo build:ios` and follow the prompts.
2. Wait for the app to finish building. You can check on the build progress by running `expo build:status`.
3. The result will be a `.ipa` (iOS) file, which you can download with the link provided upon completion of the build.

If deploying to the Apple App Store, please see [these instructions](https://docs.expo.io/versions/latest/distribution/app-stores.html).

### Deploying the Server
Our server is a separate component. Please see [these instructions](https://github.com/JIA-8100-Excelerate/API/blob/master/README.md#deploying-the-server) from our [API repository](https://github.com/JIA-8100-Excelerate/API) for deploying the server.

### Running the app in a simulator
If you wish to run the app in an iOS simulator, you will need an Apple device that runs macOS, and Xcode installed on that device.
1. [Install Xcode through the Apple App Store](https://itunes.apple.com/app/xcode/id497799835). The installation will take 30 minutes to 1 hour.
2. Build your expo project with the simulator flag by running `expo build:ios -t simulator`.
3. Download the tarball with the link given upon completion. Unpack the tar.gz by running `tar -xvzf <your-app>.tar.gz`. The result will be a `.app` file.
4. Open the iOS Simulator by running `open -a Simulator`. Wait for the simulator to boot.
5. Install the app to your iOS Simulator instance by running `xcrun simctl install booted <app path>`. Then use the Simulator as if it were your phone to open and use the app.

### Troubleshooting
- Some macOS users will encounter issues if they do not have Watchman installed on their machine. Please see the Watchman [install instructions](https://facebook.github.io/watchman/docs/install.html).
- If the QR code does not scan on your phone, you can opt to “Send link with email/SMS” from the Expo dashboard generated in your computer’s browser.
- A build can fail due to missing fields in [`app.json`](https://github.com/JIA-8100-Excelerate/Excelerate-App/blob/master/app.json). If the build fails, please see [this documentation from Expo](https://docs.expo.io/versions/latest/distribution/building-standalone-apps#2-configure-appjson) to ensure all fields are included in the file.
