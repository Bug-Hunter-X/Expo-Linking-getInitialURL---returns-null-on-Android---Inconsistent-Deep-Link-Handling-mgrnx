# Expo Linking.getInitialURL() Android Inconsistency

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API on Android.  The method sporadically returns `null`, even when the app is launched via a deep link. This behavior is inconsistent and unreliable, making it difficult to implement robust deep link handling.

## Steps to Reproduce

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Open a deep link (URL specified in the app's configuration). 
4. Observe that `Linking.getInitialURL()` may return null, causing the app to not handle the deep link correctly. 

## Expected Behavior

`Linking.getInitialURL()` should consistently return the deep link URL used to open the application.

## Actual Behavior

`Linking.getInitialURL()` returns `null` in some instances, even when the app was opened via a deep link.

## Workaround

The `bugSolution.js` file provides a workaround using the `Linking.addEventListener` method to listen for URL changes.