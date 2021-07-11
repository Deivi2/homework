import React, { useState } from "react";
import { LoginRoot } from "./Login-styles";
import { startAuthentication } from "../../redux/common/common-actions";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [{ email, password }, setValues] = useState({
    email: "",
    password: "",
  });
  const { loader, error } = useSelector((state) => state.common);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startAuthentication({ email, password }));
  };

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value.trim() }));
  };

  return (
    <LoginRoot>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label> Email </label>
          <input
            className="emailInput"
            type="email"
            name="email"
            value={email}
            onChange={handleInputs}
            autoComplete="on"
          />
        </div>
        <div className="inputs">
          <label> Password </label>
          <input
            className="passwordInput"
            type="password"
            name="password"
            value={password}
            onChange={handleInputs}
            autoComplete="on"
          />
        </div>
        <div className="errorMessage"> {error?.AUTHENTICATION} </div>
        <button
          type="submit"
          disabled={!!loader?.AUTHENTICATION || !email || !password}
        >
          {!!loader?.AUTHENTICATION ? "Authenticating..." : "Login"}
        </button>
      </form>
    </LoginRoot>
  );
};

export default Login;
