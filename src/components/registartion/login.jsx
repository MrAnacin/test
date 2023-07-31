import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from '../registartion/login.module.scss'
import logo_log from '../../image/logo.png'
import Button from "../button/button";
import ButtonSingUp from "../button/buttonForSingUp";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slice/userSlice";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  async function onSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
		await signInWithEmailAndPassword(auth, email, password)
			.then((userData) => {
				const user = userData.user;

				dispatch(
					setLogin({
						userId: user.uid,
						email: user.email,
					})
				);
				localStorage.setItem("userID", user.uid);
				localStorage.setItem("userEmail", user.email);
				navigate("/profile");
			})
      .catch((error) => {
        console.log(error.code);
				// setIsError(true);
				// setIsVisiblePopup(true);
				// const errorCode = error.code;
				// setErrorState(errorCode);
			});
	}


  // function Enter () {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     // const errorCode = error.code;
  //     // const errorMessage = error.message;
  //   });
  //   navigate('/profile')
  // }

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
          <Button text={'Войти'} onClick={onSubmit}/>
          <Link to="/registration">
            <ButtonSingUp/>
          </Link>  
      </form>
    </div>
  );
};

export default Login;