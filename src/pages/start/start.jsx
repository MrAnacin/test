import { Link } from 'react-router-dom';
import { useGetCoursesQuery } from '../../store/servises/coursesApi';

import Kursblock from "../../components/kursblock/kursblock";
import ButtonUp from "../../components/buttonUp/buttonUp";
import Yoga from "../../image/yoga.png";
import Stretching from "../../image/stretching.png";
import BodyFlex from "../../image/bodyflex.png";
import DanceFitness from "../../image/dancfitnes.png";
import StepAerobics from "../../image/step.png";

import style from "./start.module.scss";
import logoWhite from "../../image/logoWhite.png";
import sticker from "../../image/sticker.png";
import { useEffect } from 'react';

export default function Start() {

    const { data } = useGetCoursesQuery()
    

    let dataArr = Object.values(data)
    console.log(dataArr)

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logoWhite} alt="logo" />
                <Link to="/login">
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
            <Link to="/yoga">
                <Kursblock imgblock={dataArr[1].name} />
            </Link>
            <Link to="/stretching">            
                <Kursblock imgblock={dataArr[0].name} /> 
            </Link>             
            <Link to="/bodyflex">            
                <Kursblock imgblock={dataArr[2].name} />
            </Link>             
            <Link to="/dancefitness">   
                <Kursblock imgblock={dataArr[3].name} />
            </Link>             
            <Link to="/stepauerobica">   
                <Kursblock imgblock={dataArr[4].name} />
            </Link>              
            </div>
            <footer className={style.footer}>
                <ButtonUp text={"Наверх ↑"} />
            </footer>
        </div>
    )
}