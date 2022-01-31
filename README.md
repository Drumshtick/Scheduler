# Interview Scheduler

A single page react app that populates the page with interviews from an express API. Adding deleting or editing makes changes to the back-end. As this is a demo application, reseting the DB will randomize the data in the API. Included is a demonstration of props, custom hooks, selectors and a variety of testing environments.

Beyond React, this app includes the use of:
  * React/Javascript
  * Sass
  * HTML/CSS
  * Jest/Storybook/Cypress
  * API Endpoints

Create an appointment with available interviewers! Update existing interviews or cancel an interview all from one single-page react app.

### Nifty Features
* Spots update in side panel as interviews are setup or deleted
* Interviewers are only displayed if their availability needs are met for that day
* When a day has no more availability it will appear grayed out
* Schedule data is retrieved from an external API
## Screenshots

<center><img src="./Docs/Capture.PNG"></center>

<center><img src="./Docs/hover-appt.PNG"></center>

<center><img src="./Docs/edit-new.PNG"></center>

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## See [Scheduler-api](https://github.com/Drumshtick/scheduler-api) to see information on setting up the back-end API for Scheduler
