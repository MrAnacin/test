import { Link } from 'react-router-dom';
import { setTrainingListPopUp } from "../../store/slice/popUpSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { setEmail } from "../../store/slice/userSlice";


import Button from "../../components/button/button"
import User from "../../components/user/user"
import ButtonUp from "../../components/buttonUp/buttonUp";
import Yogaimg from '../../image/yoga.png';
import Stretching from '../../image/stretching.png';
import Bodyflex from '../../image/bodyflex.png';
import Kursblock from '../../components/kursblock/kursblock';
import TrainingList from '../../components/popUpTraining/popUpTrainingList'
import Input from '../../components/input/input';

import logo from '../../image/logo.png';
import style from './profile.module.scss';

const ChooseUserData = ({ onClick, setNew }) => {
  
    const setDataOnChange = (event, setData) => {
		setData(event.target.value);
	};

  return (
    <div className={style.chooseData}>
      <Input
        onChange={(event) => setDataOnChange(event, setNew)}
      />
      <Button text={"Сохранить"} onClick={onClick}/>
    </div>
  ) 
}


export default function Profile() {

  const user = localStorage.getItem("userEmail");

  const auth = getAuth();
  const dispatch = useDispatch()
  const selector = useSelector(setTrainingListPopUp)
  const modal = selector.payload.popUp.forTrainingList

  const [visibleLogin, setVisibleLogin] = useState(false)
  const [visiblePas, setVisiblePas] = useState(false)
  const [newLogin, setNewLogin] = useState(null);
	const [newPassword, setNewPassword] = useState(null);


  const handeChoiseTraining = () => {
    dispatch(setTrainingListPopUp({modal: !modal}))
  }

  const handleOpenChooseLogin = () => {
    setVisibleLogin(!visibleLogin)
		const user = auth.currentUser;
		updateEmail(user, newLogin)
			.then(() => {
				localStorage.setItem("userEmail", newLogin);
				dispatch(setEmail({ email: newLogin }));
			})
			.catch(() => {
				alert("Некорректный логин");
			});
  }

  const handleOpenChoosePas = () => {
    setVisiblePas(!visiblePas)
		const user = auth.currentUser;

		updatePassword(user, newPassword)
			.then(() => {
				console.log('done');
			})
			.catch(() => {
				alert("Некорректный пароль");
			});
  }
 
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <img src={logo} alt="logo" />
        <User />
      </header>
      <div className={style.user}>
        <h2 className={style.title}>Moй профиль</h2>
        <div className={style.user__data}>
          <h3 className={style.user__data_text}>Логин: {user} </h3>
          <h3 className={style.user__data_text}>Пароль: *********</h3>
        </div>
        <div className={style.user__button}>
          <div>
            {
              visibleLogin ? (
                <ChooseUserData onClick={handleOpenChooseLogin} setNew={setNewLogin} />
                ) : (
                <Button text="Редактировать логин" onClick={handleOpenChooseLogin} />
              )
            }
          </div>
             {
              visiblePas ? (
                <ChooseUserData onClick={handleOpenChoosePas} setNew={setNewPassword} />
                ) : (
                <Button text="Редактировать пароль" onClick={handleOpenChoosePas} />
              )
            }
        </div>
      </div>
      <div className={style.course}>
        <h2 className={style.title}>Mои курсы</h2>
        <div className={style.course__content}>
          <div className={style.blockitem}>
            <Kursblock imgblock={Yogaimg} />
            <div className={style.link}>
                <ButtonUp text={"Перейти →"} onClick={handeChoiseTraining}/>
            </div>
          </div>
          <div className={style.blockitem}>
            <Kursblock imgblock={Stretching} />
            <div className={style.link}>
              <ButtonUp text={"Перейти →"}/>
            </div>
          </div>
          <div className={style.blockitem}>
            <Kursblock imgblock={Bodyflex} />
            <div className={style.link}>
            <Link to="/yoga-training">
              <ButtonUp text={"Перейти →"}/>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <TrainingList/>
    </div>
  );
}
