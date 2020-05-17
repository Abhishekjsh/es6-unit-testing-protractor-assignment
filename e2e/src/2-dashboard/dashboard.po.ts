import { browser, element, by, Key } from "protractor";

export class DashboardPage {
  navigateTo(): Promise<unknown> {
    return browser.get("/dashboard") as Promise<unknown>;
  }

  getProfileName() {
    return element(by.id("userTitle"));
  }

  getDesignationText() {
    return element(by.id("job"));
  }

  getLogoutButtonElement() {
    return element(by.id("lgout"));
  }
}
