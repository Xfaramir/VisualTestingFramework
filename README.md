# Applitools Hackathon Automation Framework

This is Automated test which was build to test Applitools Hackathon App Functionality using Cypress and Typescript, I grouped the test challenge into the following 4 tests:

**Login Page UI Elements Test and Data-Driven Test**

**Table Sort Test**

**Canvas Chart Test**

**Dynamic Content Test**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing

A step by step series of examples that tell you how to get a development env running

```
git clone https://github.com/Xfaramir/VisualTestingFramework
```

Navigate to the folder where your project is located.

#### Run this command in Terminal to install Npm packages.

```
npm install
```

#### Add Applitools API Key

You can set your own api key in **applitools.config.js**
For security purposes It's blank now !

### How to run tests:

```
npm run cypress:open
```

This command will execute **cypress** GUI-Chrome and you can select tests to run:

**TraditionalTest.e2e.specs.ts**

**VisualAITest.e2e.specs.ts**

```
npm run cypress:run
```

This command will execute the test **headless** using Chromium (Electron):

## Page Object

In order to avoid code duplication I set up Page Object structure for this challenge.

**Path to page object** :

```
visualApplitoolsHackathon/cypress/pages/basepage.ts
```

There you can modify which version of the APP you want to test by changing the URL
from
**this.url = 'https://demo.applitools.com/hackathon.html';**
to
**this.url = 'https://demo.applitools.com/hackathonV2.html';**

## Reporting

Im using Cypress- mocha built-in reporter, also when running headlessly it will generate generated videos for the app run that can be found in **cypress/videos** , same thing if a test fail you can find it's cause in **cypress/screenshots**

## Data Driven

Here I'm using a json for users that can be found in cypress/fixtures

## Cross Browser testing and visual testing

Running the app in the following list of browsers and the most used viewports according
to **https://gs.statcounter.com/screen-resolution-stats**

```
 browser: [
    { width: 1920, height: 1080, name: 'firefox' },
    { width: 360, height: 640, name: 'chrome' },
    { width: 1366, height: 768, name: 'ie11' }
  ]
```

in concurrent mode using cypress/applitools **concurrency** option

The level of concurrency set was 5. This means that visual tests will run in parallel therefore will be faster.

Also these viewports can be adjust here: **applitools.config.js**

## P.S.

**Running version of Cypress: 3.6.1 -- Electron 73 (headless) **

**Cypress** is new tool and during my work i experienced multiple issues which i want to note:

1.  There's no much support for typescript and lacking some TS typings for Applitools Eyes

2.  Sometimes when testing the canvas with cypress it didnt load so i had to restart the Cypress GUI in order to make it work -- Happens rarely but it can be noted **here**: https://eyes.applitools.com/app/test-results/00000251828938236936/00000251828938214746/steps/1?accountId=Quz2xHHZtkOFiIHxI6EMlw~~&display=gallery&mode=step-editor

So for that reason I used

```
cy.wait(150);
```

to make my test more stable.

But in general I can see the benefit of using applitools visual testing to catch design bugs a lot faster and have more people involved in that Quality process.

## Authors

- **David Barrera - Colombia**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
