import style from './myprogress.module.scss';
import Button from '../../components/button/button';
import Input from '../../components/input/input'
import { useEffect, useState } from 'react';
import { setPopUp } from "../../store/slice/popUpSlice";
import { useSelector, useDispatch } from "react-redux";
import progress from "../../image/progress.jpg"


const Myprogress = () => {

  const dispatch = useDispatch()
  const selector = useSelector(setPopUp)
  const modal = selector.payload.popUp.isActive
  
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (modal !== "false") {
      setActive(!active)
    }
  }, [modal])

  const wellDone = () => {
    setVisible(!visible)
    dispatch(setPopUp({modal: "false"}))

    setTimeout(() => {
      setVisible(visible)
      setActive(!active)
    }, 3000);
  }

  return (
    <div className={`${active ? style.active : style.wrapper}`}>
      <div className={style.blockprogress}>
        {
          !visible ? (
            <>
            <h2 className={style.blockprogress__title}>Мой прогресс</h2>

            <div className={style.blockprogress__box}>
              <p className={style.blockprogress__box_text}>Сколько раз вы сделали наклоны вперед?</p>
              <Input type="введите значение" />
            </div>

            <div className={style.blockprogress__box}>
              <p className={style.blockprogress__box_text}>Сколько раз вы сделали наклоны назад?</p>
              <Input type="введите значение" />
            </div>

            <div className={style.blockprogress__box}>
              <p className={style.blockprogress__box_text}>Сколько раз вы сделали поднятие ног, согнутых в коленях?</p>
              <Input type="введите значение" />
            </div>

            <div className={style.blockprogress__box_button} onClick={wellDone}>
            <Button text="Отправить"/>
            </div>
             </>
          ) : ( <img src={progress} alt="Well Done" /> )
        }
      </div>
    </div>
  );
};

export default Myprogress