import Button from "../button/button";
import { setPopUp } from "../../store/slice/popUpSlice";
import { useSelector, useDispatch } from "react-redux";

import style from "./exercises.module.scss"


const Exercises = () => {

    const dispatch = useDispatch()
    const selector = useSelector(setPopUp)
    const modal = selector.payload.popUp.isActive
    
    const handleChange = () => {
        dispatch(setPopUp({modal: !modal}))
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