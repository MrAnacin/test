import Button from "../button/button";

import style from "./exercises.module.scss"

const Exercises = () => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>Упражнения</p>
            <ul className={style.exercises}>
                <li>Наклон вперед (10 повторений)</li>
                <li>Наклон назад (10 повторений)</li>
                <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
            </ul>

            <Button text={"Заполнить свой прогресс"}/>
        </div>
    )
}

export default Exercises