import User from "../../components/user/user";
import Exercises from "../../components/exercises/exercises";
import Progress from "../../components/progress/progress";
import Myprogress from "../../components/myprogress/myprogress";

import logo from '../../image/logo.png';

import style from './yogaForAuth.module.scss';
// import { useState } from "react";
// import { setPopUp } from "../../store/slice/popUpSlice";
// import { useSelector } from "react-redux";

export default function YogaForAuth() {

    // const dispatch = useDispatch()

    // const selector = useSelector(setPopUp)
    // const modal = selector.payload.popUp.isActive

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
            <Myprogress />
        </div>
    )
}