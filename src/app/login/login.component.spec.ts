import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("LoginComponent", () => {
  let loginBtn: any;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginBtn = fixture.debugElement.query(By.css(".lgbtn")).nativeElement;
  });

  it("This should create component", () => {
    expect(component).toBeTruthy();
  });

  it("Initialize login form with default values", () => {
    expect(component.loginForm.value).toEqual({ userName: "", password: "" });
  });

  it("Any of userName or password is invalid show error message for that", () => {
    let errMsg = "Please enter valid userName and password";
    component.loginForm.setValue({
      userName: "some@gmail.com",
      password: "some@123",
    });
    component.loginApp();
    expect(component.errMsg).toEqual(errMsg);
  });

  it("If userName and password invalid form is invalid", () => {
    component.loginForm.controls["userName"].setValue("");
    component.loginForm.controls["password"].setValue("");
    expect(component.loginForm.valid).toBeFalsy();
  });

  it("If userName and password is valid then form is valid", () => {
    component.loginForm.controls["userName"].setValue("abhi@gmail.com");
    component.loginForm.controls["password"].setValue("abhi@123");
    expect(component.loginForm.valid).toBeTruthy();
  });

  it("check userName field related validations", () => {
    let userName = component.loginForm.controls["userName"];
    expect(userName.valid).toBeFalsy();
    expect(userName.pristine).toBeTruthy();
    expect(userName.errors["required"]).toBeTruthy();
    component.loginForm.controls["userName"].setValue("admin");
    expect(userName.errors["pattern"]).toBeTruthy();
  });

  it("check password field related validations", () => {
    let password = component.loginForm.controls["password"];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors["required"]).toBeTruthy();
    component.loginForm.controls["password"].setValue("admi");
    expect(password.errors["minlength"]).toBeTruthy();
  });

  it("Primary when land on page login button is disable", () => {
    expect(loginBtn.disabled).toBe(true);
  });

  it("If input provided in the respective field login button gets enabled", () => {
    component.loginForm.controls["userName"].setValue("abhi@gmail.com");
    component.loginForm.controls["password"].setValue("abhi@123");
    fixture.detectChanges();
    expect(loginBtn.disabled).toBe(false);
  });

  it("If credentials is correct then navigate to dashboard page", () => {
    component.loginForm.setValue({
      userName: "abhi@gmail.com",
      password: "abhi@123",
    });
    spyOn(component.router, "navigate");
    component.loginApp();
    expect(component.router.navigate).toHaveBeenCalled();
  });
});
