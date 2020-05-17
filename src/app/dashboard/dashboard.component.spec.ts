import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { DashboardComponent } from "./dashboard.component";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("This should create component", () => {
    expect(component).toBeTruthy();
  });

  it("This should render profile usertitle with name", () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector(".profile-usertitle .profile-usertitle-name")
        .textContent
    ).toContain("Abhishek Joshi");
  });

  it("On press Logout button user should redirect to login button", () => {
    spyOn(component.router, "navigate");
    component.Logout();
    expect(component.router.navigate).toHaveBeenCalled();
  });
});
