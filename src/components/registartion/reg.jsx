import React, { useState } from 'react';
import styles from '../registartion/reg.module.scss'
import logo_log from '../../image/logo.png'
import Button from "../button/button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Registration = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    console.log('Регистрация выполнена');
  };
  
  function Reg () {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      
      // Обработка ошибок регистрации
      console.log('Ошибка регистрации:', error.message);
    });
  }
  return (
    <div className={styles.registration}>
      <div className={styles.registration__image}>
        <img className={styles.logo_log_box} src={logo_log} alt="logo" />
      </div>
      <form onSubmit={handleSubmit} className={styles.registration__form}>
          <input 
            className={styles.input}
            placeholder='Логин'
            type="email"
            value={email}
            onChange={handleEmailChange}
            required />
          <input 
            className={styles.input}
            placeholder='Пароль'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required />
          <input 
            className={styles.input}
            placeholder='Подтвердите пароль'
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required />
        {passwordMatchError && <p style={{ color: 'red' }}>Пароли не совпадают</p>}
        <Button text={'Зарегистрироваться'} onClick={Reg}/>
      </form>
    </div>
  );
};

export default Registration
