import style from './myprogress.module.scss';
import Button from './components/button';
import Input from './components/input'

const Myprogress = () => {
  return (
    <div className={style.blockprogress}>
        <h1 className={style.titleprogress}>Мой прогресс</h1>

        <div>
          <p className={style.paragraphprogress}>Сколько раз вы сделали наклоны вперед</p>
          <Input type="введите значение" />
        </div>
        <div>
          <p className={style.paragraphprogress}>Сколько раз вы сделали наклоны назад</p>
          <Input type="введите значение" />
        </div>

        <div>
          <p className={style.paragraphprogress}>Сколько раз вы сделали поднятие ног, согнутых в коленях</p>
          <Input type="введите значение" />
        </div>

        <div>
        <Button text="Отправить"/>
        </div>
    </div>
  );
};

export default Myprogress