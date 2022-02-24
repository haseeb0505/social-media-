import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const ConfirmPassword = useRef();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (ConfirmPassword.current.value !== password.current.value) {
      ConfirmPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">HZ Social</h3>
          <span className="loginDesc">
            Connect with friends and World around you on HZ social
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" type="submit" onSubmit={handleClick}>
            <input
              placeholder="User Name"
              ref={username}
              required
              className="loginInput"
            />
            <input
              placeholder="Email"
              ref={email}
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              required
              className="loginInput"
              //   type="password"
              minLength="6"
            />
            <input
              placeholder="Confirm Password"
              ref={ConfirmPassword}
              required
              //   type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>

            <button className="loginregisterButton">Login to Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
