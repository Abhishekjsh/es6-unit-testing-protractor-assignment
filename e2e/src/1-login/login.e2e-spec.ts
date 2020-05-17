import { LoginPage } from "./login.po";
import { browser } from "protractor";

describe("Login view", function () {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it("It should display title of login component", () => {
    page.navigateTo();
    expect(page.getTitle().getText()).toEqual("Login");
  });

  it("If we provide wrong values to userName field set dummy value", () => {
    page.navigateTo();
    page.setUserNameElement("dummy");
    expect(page.getUserNameElement()).toEqual("dummy");
  });

  it("should display error for invalid UserName field", () => {
    page.navigateTo();
    page.setUserNameElement("dummy");
    expect(page.getUserNameError().getText()).toEqual("userName must be valid");
  });

  it("If we provide wrong values to password should set dummy input", () => {
    page.navigateTo();
    page.setPasswordInputElement("dummy");
    expect(page.getPasswordInputElement()).toEqual("dummy");
  });

  it("should display error for invalid password", () => {
    page.navigateTo();
    page.setPasswordInputElement("xsc");
    expect(page.getPasswordValidateError().getText()).toEqual(
      "Password must be at least 8 characters"
    );
  });

  it("Show login button", () => {
    page.navigateTo();
    expect(page.getLoginButtonElement()).toBeTruthy();
  });

  it("Should redirect dashboard", () => {
    page.navigateTo();
    page.setUserNameElement("abhi@gmail.com");
    page.setPasswordInputElement("abhi@123");
    page
      .getLoginButtonElement()
      .click()
      .then(function () {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch("/dashboard");
      });
  });
});
