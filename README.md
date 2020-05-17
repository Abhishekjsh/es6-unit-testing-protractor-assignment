# Es6UnitTestingProtractorAssignment

- This Assignment is used to show Login page and Dashboard page please find the below features of this application.

- Login Component:

- Two fields user name and password are present on it.
- Login button also placed below the fileds.
- Initially Login button disable untill we can't enter any user name and password on the filed.
- Regex applied on user name fild which says it must same as email address field it should consider @ and .'' in it and if regex does not match should give error 'userName must be a valid'.
- User name Required error also placed over here needs to fill this filed.
- Password is required error also placed over here needs to fill this filed.
- validation error message displays if we enter max length in password field.
- If user name and password field is not valid it displays error related to: "Please enter valid userName and password".
- On click login button user should redirect to Dashboard page.

- Dashboard Component:

- Dashboard page contains simple ui on page.
- Log out button placed on dashboard page.
- On click Log out button user should redirect to Login page again.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

- In this write unit test cases for Login and dashboard component.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

- In this write E2E test cases for Login and dashboard component.

### Tech

- [Angular 9] - HTML enhanced for web apps!
- [BootStrap 4] - UI components
- [karma] - Execute unit test cases
- [jasmine] - To write unit test cases
- [protractor] - For End-to-End test cases

### Installation

Take clone from

```
$ git clone https://github.com/Abhishekjsh/es6-unit-testing-protractor-assignment
```

Install the dependencies.

```
$ es6-unit-testing-protractor-assignment
$ npm install
$ ng serve
Open http://localhost:4200 in browser
$ ng test
Run unit test cases
$ ng e2e
To execute End-to-End test case
```
