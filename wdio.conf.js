export const config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'ZY227KC6W5',
        'appium:platformVersion': '11',
       'appium:appPackage': 'com.purplecover.anylist',
'appium:appActivity': 'com.purplecover.anylist.ui.MainActivity',

        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
