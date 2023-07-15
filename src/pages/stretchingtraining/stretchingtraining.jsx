import logo from '../../image/logo.png';
import Buttontrain from "../../components/buttonTrain/buttontrain";
import style from './stretchingtraining.module.scss';

const Stretchingtraining = ({exerciseNumber}) => {
    
    return (
    <div className={style.wrapper}>
        <header className={style.header}>
            <img src={logo} alt="logo" />
        </header>
        <div>
            <p className='tytle'>Выберите тренировку</p>
        </div>
        <div className='buttons_train'>
        <Buttontrain exerciseNumber={"Основы стретчинга "} />
        <Buttontrain exerciseNumber={"Разогрев мышц"} />
        <Buttontrain exerciseNumber={"Разогрев мышц 2.0"} />        
        </div>
    </div>
    )
}
export default Stretchingtraining