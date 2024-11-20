# React Native Timer App

A basic timer app built with React Native that allows users to manage multiple timers. Each timer can be independently started, paused, and reset, with a maximum of five timers running simultaneously. The app provides a notification when each timer reaches zero.

## Features

- **Multiple Timers**: Add up to five timers, each managed independently.
- **Countdown**: Each timer counts down from a user-specified time.
- **Start, Pause, Reset**: Control each timer's countdown individually.
- **Notification on Completion**: Alerts the user when a timer reaches zero.
- **Simple and Clean UI**: Easy to use and navigate.

## Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or later)
- React Native CLI and development environment set up (for Android and/or iOS)
- Android Studio (for Android development) or Xcode (for iOS development, on macOS)

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/gowthamadithya/Timer.git
cd Timer
```
2. Install Dependencies ```npm install```
3 Run the App For Android (Ensure an emulator is running or a device is connected):
```
npx react-native run-android
```

For iOS (macOS required):
```
npx react-native run-ios
```
4. Build the APK (Android)
To generate an APK for Android:
In the project root, navigate to the android folder:
```
cd android
```
Run the following command to create a release build:
```
./gradlew assembleRelease
```
The APK will be located in android/app/build/outputs/apk/release/app-release.apk.


#Note

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/workspaces/Timer-DoTimely/Timer" && npx react-native run-android



Key Changes for React Native Version
UI Components: Replace HTML tags (e.g., <input>, <button>, <div>, etc.) with React Native components (TextInput, Button, View).
State and Props: Use similar state management for timers but add improvements for better interaction on mobile.
Notifications: Since this app should notify the user when a timer reaches zero, include a function to simulate alerts when each timer ends.
Styling: Use React Native's StyleSheet for consistent styling across devices.
