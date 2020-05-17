import { DashboardPage } from "./Dashboard.po";
import { browser } from "protractor";

describe("Dashboard view", function () {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it("Get profile name", () => {
    page.navigateTo();
    expect(page.getProfileName().getText()).toEqual("Abhishek Joshi");
  });

  it("get desgination text", () => {
    page.navigateTo();
    expect(page.getDesignationText().getText()).toEqual("SENIOR ENGINEER");
  });

  it("click on  logout and redirect login", () => {
    page.navigateTo();
    page
      .getLogoutButtonElement()
      .click()
      .then(function () {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch("/login");
      });
  });
});
