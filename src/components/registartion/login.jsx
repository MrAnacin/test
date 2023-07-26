import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from '../registartion/login.module.scss'
import logo_log from '../../image/logo.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
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
  function Enter () {
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
  });
  navigate('/profile')
  }

  return (
    <div className={styles.log_box}>
      <div>
        <img className={styles.logo_log_box} src={logo_log} alt="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.log_email_box}>
          <input
            placeholder="Логин"
            className={styles.log_email}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.log_password_box}>
          <input
            placeholder="Пароль"
            className={styles.log_password}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.log_btn_box}>
          <button onClick={Enter} className={styles.log_btn}>Войти</button>
          <Link to="/reg">
            <button className={styles.reg_btn} type="submit">Зарегистрироваться</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;