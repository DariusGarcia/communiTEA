import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";
import { Button } from "antd";
import Auth from "../../utils/auth";
import style from "./signup.module.css";
import FooterComponent from "../../Components/footer/footer";
import Navbar from "../../Components/navbar";

export default function Signup() {
  const [formState, setFormState] = useState({
    name: "",
    password: "",
  });

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    // console.log(...formState)

    try {
      const { data } = await register({
        variables: { ...formState },
      });

      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={style.navContainer}>
        <Navbar />
      </div>
      <div className={style.container}>
        <h1>Sign Up</h1>
        <p className={style.text}>
          Sign up now for more information on trending boba shops from some of
          the greatest boba enthusiasts in your area! 🧋
        </p>
        <form className={style.formContainer} onSubmit={handleFormSubmit}>
          <input
            className={style.inputField}
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Enter Username"
          />
          <input
            className={style.inputField}
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <span className={style.btnContainer}>
            <Button className={style.signUpBtn} htmlType="submit" block>
              Sign Up
            </Button>
          </span>
          <div className={style.alternativeOptionSection}>
            <h4 className={style.altEl}>Already have an account?</h4>
            <Link to="/login">
              <Button className={style.loginBtn}>Login</Button>
            </Link>
          </div>
        </form>
      </div>
      <FooterComponent />
    </>
  );
}
