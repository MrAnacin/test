import Button from "../button/button";
import { setMyprogressPopUp } from "../../store/slice/popUpSlice";
import { useSelector, useDispatch } from "react-redux";

import style from "./exercises.module.scss"


const Exercises = () => {

    const dispatch = useDispatch()
    const selector = useSelector(setMyprogressPopUp)
    const modal = selector.payload.popUp.forProgress
    
    const handleChange = () => {
        dispatch(setMyprogressPopUp({modal: !modal}))
    }

    return (
        <div className={style.wrapper}>
            <p className={style.title}>Упражнения</p>
            <ul className={style.exercises}>
                <li>Наклон вперед (10 повторений)</li>
                <li>Наклон назад (10 повторений)</li>
                <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
            </ul>

            <Button text={"Заполнить свой прогресс"} onClick={handleChange} />
        </div>
    )
}

export default Exercises