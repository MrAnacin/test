import logo from '../../image/logo.png';
import Buttontrain from "../../components/buttonTrain/buttontrain";
import style from './yogatraining.module.scss';

const Yogatraining = ({exerciseNumber}) => {
    
    return (
    <div className={style.wrapper}>
        <header className={style.header}>
            <img src={logo} alt="logo" />
        </header>
        <div>
            <p className='tytle'>Выберите тренировку</p>
        </div>
        <div className='buttons_train'>
        <Buttontrain exerciseNumber={"Утренняя практика / Йога на каждый день / 1 день / Алексей Казубский"} />
        <Buttontrain exerciseNumber={"Красота и здоровье / Йога на каждый день / 2 день / Алексей Казубский"} />
        <Buttontrain exerciseNumber={"Асаны стоя / Йога на каждый день / 3 день / Алексей Казубский"} />
        <Buttontrain exerciseNumber={"Растягиваем мышцы бедра / Йога на каждый день / 4 день / Алексей Казубский"} />
        <Buttontrain exerciseNumber={"Гибкость спины / Йога на каждый день / 5 день / Алексей Казубский"} />        
        </div>
    </div>
    )
}
export default Yogatraining