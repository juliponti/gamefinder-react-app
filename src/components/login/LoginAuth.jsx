import { useState, useRef } from "react";
import {
  isEmailValid,
  isPasswordValid,
  normalizeData,
  debounce,
} from "../utils/validationAuth";
import { fetchLogin } from "../../services/login.service";
import { useNavigate } from "react-router-dom";
import Snackbar from "../Snackbar";
import eyeOpen from "../../assets/svg/login/eye-open.svg";
import eyeOff from "../../assets/svg/login/eye-off.svg";
import "../../styles/login/loginCard.css";

const LoginAuth = () => {
  const [emailError, setEmailError] = useState("");
  const [pswError, setPswError] = useState("");

  const [validationEmail, setValidationEmail] = useState(true);
  const [validationPassword, setValidationPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();
  const snackbarRef = useRef(null);

  /* Validation email & password when writing*/

  const handleChangeEmail = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setValidationEmail(false);
      setEmailError("Email cannot be blank");
      return;
    }

    if (!isEmailValid(inputValue)) {
      setValidationEmail(false);
      setEmailError("Email format invalid");
    } else {
      setValidationEmail(true);
    }
  };

  const handleChangePassword = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setValidationPassword(false);
      setPswError("Passsword cannot be blank");
      return;
    }

    if (!isPasswordValid(inputValue)) {
      setValidationPassword(false);
      setPswError("Password is too short");
    } else {
      setValidationPassword(true);
    }
  };

  const handleOnBlur = (e, inputState) => {
    const input = e.target;

    if (input.value === "") {
      return;
    }

    if (inputState) {
      input.classList.add("success");
      input.classList.remove("error");
    } else {
      input.classList.add("error");
      input.classList.remove("success");
    }
  };

  /* Show password */

  const showPass = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  /* Validation onSubmit*/

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const { email, password } = Object.fromEntries(data.entries());
    const dataUser = normalizeData(email, password);

    if (dataUser.password === "" && dataUser.email === "") {
      snackbarRef.current.show("Credentials cannot be empty");
    }

    fetchLogin(dataUser)
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("id", data.user.id);
        /* localStorage.setItem("name", data.user.name); */
        localStorage.setItem("profile pic", data.user.picture);
        navigate("/home");
      })
      .catch(() => {
        snackbarRef.current.show("Some of the data entered is not valid");
      });
  };

  return (
    <>
      <div className="login__card">
        <div className="card-header">
          <h1>Welcome! Log in or register</h1>
          <h2>Log in to find the games you're looking for!</h2>
        </div>
        <form className="form__container" method="post" onSubmit={handleSubmit}>
          <fieldset className="form__fieldset ">
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="input-email"
              autoComplete="off"
              onChange={debounce(handleChangeEmail, 1000)}
              onBlur={(e) => handleOnBlur(e, validationEmail)}
              className={validationEmail ? "valid-input" : "error-input"}
            />
            <small
              className={
                !validationEmail ? "error-message-on" : "error-message-off"
              }>
              {emailError}
            </small>
            <div className="icon__container">
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                autoComplete="off"
                onChange={debounce(handleChangePassword, 1000)}
                onBlur={(e) => handleOnBlur(e, validationPassword)}
                className={validationPassword ? "valid-input" : "error-input"}
              />
              <img
                src={showPassword ? eyeOpen : eyeOff}
                alt="Show or hide password"
                className={
                  validationPassword ? "password-icon" : "eye-psw-error"
                }
                onClick={showPass}
              />
            </div>
            <small
              className={
                !validationPassword ? "error-message-on" : "error-message-off"
              }>
              {pswError}
            </small>
          </fieldset>

          <div className="secondary__container">
            <div className="checkbox__container">
              <input
                className="checkbox"
                type="checkbox"
                name="checkbox"
                id="remember"
              />
              <label className="checkbox__remember" htmlFor="remember">
                Remember me
              </label>
            </div>
            <button
              className="register__link"
              onClick={(e) => e.preventDefault()}>
              Forgot password?
            </button>
          </div>
          <button type="submit" className="form__button">
            Log in
          </button>
        </form>

        <div className="register__container">
          <p>Not registered yet?</p>
          <button
            className="register__link"
            onClick={(e) => e.preventDefault()}>
            Register Now
          </button>
        </div>

        <div className="or__container">
          <p>or</p>
        </div>
      </div>
      <Snackbar ref={snackbarRef} />
    </>
  );
};

export default LoginAuth;
