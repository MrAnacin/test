import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setTrainingListPopUp } from "../../store/slice/popUpSlice";
import { useSelector, useDispatch } from "react-redux";

import Buttontrain from "../buttonTrain/buttontrain";

import style from './popUpTrainingList.module.scss';

const TrainingList = () => {    

  const dispatch = useDispatch()
  const selector = useSelector(setTrainingListPopUp)
  const modal = selector.payload.popUp.forTrainingList
    
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (modal !== false) {
        setIsActive(!isActive)
    }
  }, [modal]) // eslint-disable-line

  const handleChooise = () => {
    dispatch(setTrainingListPopUp({modal: !modal}))
  }

    return (
        <div className={`${isActive ? style.wrapper : style.active }`}>
            <div className={style.box}>   
                <p className={style.tytle}>Выберите тренировку</p>
                <div className={style.buttons}>
                    <Buttontrain exercise={"Утренняя практика"} number={"Йога на каждый день / 1 день"} />
                    <Link to="/yoga-training">
                        <Buttontrain exercise={"Красота и здоровье"} number={"Йога на каждый день / 2 день"} onClick={handleChooise} />
                    </Link>
                    <Buttontrain exercise={"Асаны стоя"}  number={"Йога на каждый день / 3 день "} />
                    <Buttontrain exercise={"Растягиваем мышцы бедра"} number={"Йога на каждый день / 5 день"} />
                    <Buttontrain exercise={"Гибкость спины"} number={"Йога на каждый день / 5 день"} />        
                </div>
            </div>
    </div>
    )
}
export default TrainingList