import React, { useState } from "react";
import styles from '../registartion/login.module.scss'
import logo_log from '../../image/logo.png'
import Button from "../button/button";
import ButtonSingUp from "../button/buttonForSingUp";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__image}>
        <img src={logo_log} alt="logo" />
      </div>
      <form onSubmit={handleSubmit} className={styles.login__form}>
          <input
            placeholder="Логин"
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <input
            placeholder="Пароль"
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <Button text={'Войти'}/>
          <Link to="/registration">
            <ButtonSingUp/>
          </Link>
      </form>
    </div>
  );
};

export default Login;