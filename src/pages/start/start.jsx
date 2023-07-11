import { Link } from 'react-router-dom';
import Kursblock from "../../components/kursblock/kursblock";
import ButtonUp from "../../components/buttonUp/buttonUp";

import yoga from "../../image/yoga.png";
import stretching from "../../image/stretching.png";
import bodyflex from "../../image/bodyflex.png";
import dancfitnes from "../../image/dancfitnes.png";
import step from "../../image/step.png";

import style from "./start.module.scss";
import logoWhite from "../../image/logoWhite.png";
import sticker from "../../image/sticker.png";

export default function Start() {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logoWhite} alt="logo" />
                <Link to="/profile">
                    <button className={style.button}>Войти</button>
                </Link>
            </header>
            <div className={style.description}>
                <div className={style.description__box}>
                    <p className={style.description__text}>Онлайн-тренировки для занятий дома</p>
                    <h1 className={style.description__top}>Начните заниматься спортом и улучшите качество жизни</h1>
                </div>
                <img src={sticker} alt="sticker" />
            </div>
            <div className={style.content}>
                <Kursblock imgblock={yoga} />
                <Kursblock imgblock={stretching} />
                <Kursblock imgblock={bodyflex} />
                <Kursblock imgblock={dancfitnes} />
                <Kursblock imgblock={step}/>
            </div>
            <footer className={style.footer}>
                <ButtonUp text={"Наверх ↑"} />
            </footer>
        </div>
    )
}