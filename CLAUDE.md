# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native application for Android. The project uses React Native 0.82.0 with TypeScript.

## Key Commands

### Development
- Start Metro bundler: `npm start`
- Run on Android: `npm run android` (requires Android emulator/device)
- Run tests: `npm test`
- Lint code: `npm run lint`

### Android-Specific
- Build debug APK: `cd android && ./gradlew assembleDebug`
- Build release APK: `cd android && ./gradlew assembleRelease`
- Clean Android build: `cd android && ./gradlew clean`
- Install debug build: `cd android && ./gradlew installDebug`

### Development Tools
- Open React Native dev menu: Shake device or press `Cmd+M` (macOS) / `Ctrl+M` (Windows/Linux)
- Reload app: Press `R` twice in the emulator or dev menu
- Toggle element inspector: Press `I` in dev menu
- Enable Fast Refresh: Enabled by default, auto-reloads on save

## Project Structure

- `App.tsx` - Main application component (entry point for UI)
- `index.js` - Application registration entry point
- `android/` - Android native project files
- `__tests__/` - Jest test files
- `node_modules/` - npm dependencies

## Architecture

This is a simple React Native app with a single component (`App.tsx`) that displays "Hello World" centered on screen. The app uses:
- React Native core components (View, Text, SafeAreaView, StatusBar)
- StyleSheet API for styling
- TypeScript for type safety

To add new screens or features, create new components in a `src/components/` directory and import them into `App.tsx`.
