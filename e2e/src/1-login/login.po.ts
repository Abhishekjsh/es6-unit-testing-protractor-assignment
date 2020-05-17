import { browser, by, element } from "protractor";

export class LoginPage {
  navigateTo(): Promise<unknown> {
    return browser.get("/login") as Promise<unknown>;
  }

  getTitle(){
    return element(by.id('title'));
  }
  setUserNameElement(text) {
    return element(by.id("userName")).sendKeys(text);
  }

  getUserNameElement() {
    return element(by.id("userName")).getAttribute("value");
  }

  getUserNameError() {
    return element(by.id("uNPattern"));
  }

  setPasswordInputElement(password) {
    return element(by.id("pwd")).sendKeys(password);
  }

  getPasswordInputElement() {
    return element(by.id("pwd")).getAttribute("value");
  }

  getPasswordValidateError() {
    return element(by.id("pwdLength"));
  }

  getLoginButtonElement() {
    return element(by.id("lgnbtn"));
  }
}
