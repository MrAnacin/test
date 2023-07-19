import User from "../../components/user/user";
import Exercises from "../../components/exercises/exercises";
import Progress from "../../components/progress/progress";

import logo from '../../image/logo_log.png';
import style from './yogaForAuth.module.scss';

export default function YogaForAuth() {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logo} alt="logo" />
                <User />
            </header>
            <div className={style.content}>
                <h2 className={style.content__title}>Йога</h2>
                <p className={style.content__description}> Красота и здоровье / Йога на каждый день / 2 день</p>
                <div className={style.content__video}>
                    <p>Тут будет видео</p>
                </div>
            </div>
            <div className={style.footer}>
                <Exercises />
                <Progress/>
            </div>
        </div>
    )
}