import style from './countprogress.module.scss';
import countprogress from './image/countprogress'

const Countprogress = () => {
  return (
    <div className={style.countprogress}>
        <div>
            <h1 className={style.titlecountprogress}>Ваш прогресс засчитан!</h1>        
            <img src={countprogress} alt="img" className={style.countprogress} /> 
        </div>
        
    </div>
  );
};

export default Countprogress