import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMsg: string;
  constructor(public router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  get formInstance() {
    return this.loginForm.controls;
  }

  ngOnInit() {}

  loginApp() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    if (userName === "abhi@gmail.com" && password === "abhi@123") {
      this.router.navigate(["/dashboard"]);
    } else {
      this.errMsg = "Please enter valid userName and password";
    }
  }
}
