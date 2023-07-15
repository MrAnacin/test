import Button from "../button/button";
import telephone from '../../image/telephone.png';
import style from "./coursent.module.scss";

const Coursent = () => {

    return (
    <div className={style.zapisblock}>
        <div className={style.zapisblock_proba}>
            <div className={style.zapisblock_text}>
                <p className={style.text}>
    Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость.
                </p>
            </div>
            
            <div className={style.zapisblock__button}>          
                <Button text="Записаться на тренировку" />
            </div>                 
        </div>
        <div className={style.zapisblock_hpone}>
            <img src={telephone} alt="telephone" />
        </div>               
            
    </div>
    )
}

export default Coursent