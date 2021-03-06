# Objective App

Create your objectives in 2 modes:

1. With an accountability partner, or
2. By yourself

This project is currently optimised for iOS devices only, specifically iPhone 12.

Figma link: https://www.figma.com/file/wpNmK9IfFCJUKn4vg4RUxU/Objective-UI?node-id=0%3A1

## Getting started

This is a standard [Expo](https://docs.expo.io/) project.

### Requirements

You will need the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) to run the app. To view the iOS app in a simulator, you need a Macbook installed with Xcode. View the guide [here](https://docs.expo.io/workflow/ios-simulator/).

### Setting up

1. Create the Firebase config file:
   Go to `src` and create a directory `firebase`. Then, create an empty config file `config.js` inside.

2. Paste the following into `config.js`:

```
import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

// Paste your Firebase config keys from Step 3 later here.
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID"
}

export { firebase, firebaseConfig };
```

3. Setup your [Google Firebase console](https://firebase.google.com/):

   1. Add a new project.
   2. After your project is done setting up, create a 'Web' app.
   3. Go to Settings > Project Settings > click on Config (on bottom of screen), then copy the Firebase configuration object.
   4. Replace the sample `const firebaseConfig` in `config.js` (created above) with your own configuration.

4. Install node modules:

```
npm install
```

5. Start running the app:

```
expo start
```

## Status of project

Do check out the Projects tab of this GitHub repo for tracking of individual tasks.

- [x] Setup login and registration with Firebase
- [ ] UI components (Activity, Home, Profile)
  - [ ] Activity
  - [ ] Home
    - [x] Landing page
    - [x] 'What is your objective?' Screen
    - [x] 'Choose objective type' Screen
    - [x] 'Describe objective in detail' Screen
    - [ ] 'Design your objective' Screen
  - [x] Profile
    - [x] Objective summary screen
    - [ ] Edit profile screen
    - [x] Settings (+ log out) screen
- [ ] CRUD operations (temporarily removed due to adding of additional screens)
