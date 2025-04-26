# AnyList App Automation

## Overview
This is a professional mobile test automation project built using **WebdriverIO**, **Appium**, and **JavaScript** to test the **AnyList** Android mobile application on real devices, emulators, and AWS Device Farm.

## Features Covered
### Mobile App Testing
- Launching the AnyList app on a real Android device
- Verifying that the main screen ("Lists") is displayed
- Opening the "My Grocery List" screen
- Adding an item ("tomato") to the list
- Validating that the new item appears on the screen

## Technologies Used
- WebdriverIO
- Appium
- Mocha
- JavaScript
- Android Emulator (API 30 - Android 11)
- Real Android Device (Motorola, Android 11)
- AWS Device Farm

## Supported Environments
- Real Android Device (tested)
- Android Emulator (tested)
- AWS Device Farm (configured and tested)

## How to Run Locally
```bash
npx appium
npx wdio run wdio.conf.js
```

## AWS Device Farm Execution
I also executed tests on **AWS Device Farm**.  
To view the detailed step-by-step setup with screenshots, see the presentation:

[View AWS Device Farm Walkthrough](https://docs.google.com/presentation/d/1pcpsNAJ_WsUC-sykvT98ZO1lAdA-GK9DdJzPun9TNgI/edit?usp=sharing)

## Author
**Tatyana Aipova** — QA Engineer passionate about mobile testing and automation.


