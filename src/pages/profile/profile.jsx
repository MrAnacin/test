import { Link } from 'react-router-dom';
import Button from "../../components/button/button"
import User from "../../components/user/user"
import ButtonUp from "../../components/buttonUp/buttonUp";
import Yogaimg from '../../image/yoga.png';
import Stretching from '../../image/stretching.png';
import Bodyflex from '../../image/bodyflex.png';
import Kursblock from '../../components/kursblock/kursblock';
import logo from '../../image/logo.png';
import style from './profile.module.scss';


export default function Profile() {
 
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <img src={logo} alt="logo" />
        <User />
      </header>
      <div className={style.user}>
        <h2 className={style.title}>Moй профиль</h2>
        <div className={style.user__data}>
          <h3 className={style.user__data_text}>Логин: sergey.petrov96 </h3>
          <h3 className={style.user__data_text}>Пароль: 4fkhdj880d</h3>
        </div>
        <div className={style.user__button}>
          <Button text="Редактировать логин" />
          <Button text="Редактировать пароль" />
        </div>
      </div>
      <div className={style.course}>
        <h2 className={style.title}>Mои курсы</h2>
        <div className={style.course__content}>
          <div className={style.blockitem}>
            <Kursblock imgblock={Yogaimg} />
            <div className={style.link}>
            <Link to="/yoga-training">
              <ButtonUp text={"Перейти →"}/>
            </Link>
            </div>
          </div>
          <div className={style.blockitem}>
            <Kursblock imgblock={Stretching} />
            <div className={style.link}>
            <Link to="/yoga-training">
              <ButtonUp text={"Перейти →"}/>
            </Link>
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
    </div>
  );
}
