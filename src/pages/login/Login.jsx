import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/rom.png";
import { useNavigate } from "react-router-dom";

// import authstatechanged to check if the user is logged in or not
import { onAuthStateChanged, signOut } from "firebase/auth";

// auth from firebase authentication
import { auth } from "../../firebase";

// import sign in with email and password
import { signInWithEmailAndPassword } from "firebase/auth";

// import user with email and passworrd

import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  // state for email , password and username
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [regError, setRegError] = useState("");
  const [userRegMsg, setUserRegMsg] = useState("");
  const [disabled, setdisabled] = useState(false);
  //console.log(email);
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // unmounting the hoook
    return () => {
      listen();
    };
  }, []);
  // signing out the user

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setEmail("");
        setPass("");
        setUsername("");
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  // WRITING SCRIPT FOR LOGIN PAGE
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const btnPopup = document.querySelector(".btnLogin-popup");
  const iconClose = document.querySelector(".icon-close");
  // const colorChange = document.querySelector(".btn");
  // colorChange?.addEventListener("click", () => {
  //   wrapper.classList.add("color-change");
  // });

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

  // function to reset all values (email, pass , username)
  const reset = () => {
    setEmail("");
    setPass("");
    setUsername("");
  };

  // handle submit on login
  const handleSubmit = (e) => {
    // to do login
    e.preventDefault();
    setdisabled(true);
    const adder = document.getElementById("button-click");
    adder?.addEventListener("click",()=>{
      // how too add the class here now 
      adder.classList.add("color-change"); //  here a new class will be added on clicking 
    })
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
          navigate("/home");
        
      })
      .catch((error) => {
        setError("User not registered!");
      });
    setdisabled(false);
  };

  // register function to register user
  const register = (e) => {
    e.preventDefault();
    //setdisabled(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        //navigate("/");
        console.log("user registered succesfully");
      })
      .catch((error) => {
        setRegError("Not Registered");
      });
    navigate("/");
    setUserRegMsg("User registered succesfully!");
    //setdisabled(false);
  };

  // icon pr close krne pr sab clear ho jana chaiye
  const iconset = () => {
    setEmail("");
    setPass("");
    setUsername("");
  };

  return (
    <div className="full">
      <header>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <nav className="navigation">
          <a href="#">About</a>
          {/* <a href="#">Contact</a> */}
          <button class="btnLogin-popup">Login</button>
            {/* {authUser ? (
              <button class="btnLogin-popup" onClick={userSignOut}>
                SignOut{" "}
              </button>
            ) : (
              <button class="btnLogin-popup">Login</button>
            )} */}
        </nav>
      </header>

      <div className="wrapper">
        <span className="icon-close" onClick={iconset}>
          <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button
            id="button-click"
              type="submit"
              className="btn"
              onClick={handleSubmit}
              disabled={disabled}
            >
              Login
            </button>
            {error && <p className="login-error">{error}</p>}
            <div className="login-register">
              <p>
                Dont have an account?
                <a href="#" className="register-link" onClick={reset}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <h2>Registration</h2>
          <form onSubmit={register}>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
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
            <p className="reg-done">{userRegMsg}</p>
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
