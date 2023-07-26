import React, { useState } from 'react';
import styles from '../registartion/reg.module.scss'
import logo_log from '../../image/logo.png'
// import firebase from '../../firebase';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationPage = () => {
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

  return (
    <div className={styles.reg_box}>
      <div>
        <img className={styles.logo_log_box} src={logo_log} alt="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.email_reg_box}>
          <input className={styles.reg_email} placeholder='Логин' type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className={styles.password_reg_box}>
          <input className={styles.reg_password} placeholder='Пароль' type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className={styles.confirmpassword_reg_box}>
          <input className={styles.reg_confirm_password} placeholder='Подтвердите пароль' type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        </div>
        {passwordMatchError && <p style={{ color: 'red' }}>Пароли не совпадают</p>}
        <div className={styles.btn_reg_box}>
          <button onClick={createUserWithEmailAndPassword} className={styles.btn_reg} type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
