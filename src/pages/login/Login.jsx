import React from "react";
import "./style.css";
import logo from "../../assets/movix-logo.svg";



const Login = () => {
  // state to get dyanmic background

  // WRITING SCRIPT FOR LOGIN PAGE
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const btnPopup = document.querySelector(".btnLogin-popup");
  const iconClose = document.querySelector(".icon-close");

  registerLink?.addEventListener("click", () => {
    wrapper.classList.add("active");
  });

  // login
  loginLink?.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  btnPopup?.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
  });

  iconClose?.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
  });

  return (
    <div className="full" >
      <header>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <nav className="navigation">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button class="btnLogin-popup">Login</button>
        </nav>
      </header>

      <div className="wrapper">
        <span className="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="email" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Dont have an account?
                <a href="#" className="register-link">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span class="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="email" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree terms and conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?
                <a href="#" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
