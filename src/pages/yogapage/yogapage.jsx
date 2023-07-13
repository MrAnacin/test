// import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import yogatitle from '../../image/yogatitle.png';
import opisanie from '../../image/opisanie.png';
import deskript1 from '../../image/deskript1.png';
import deskript2 from '../../image/deskript2.png';
import medicaladvice from '../../image/medicaladvice.png';
import Coursent from '../../components/coursEnt/coursent';
import style from "./yogapage.module.scss";


export default function Yogapage() {

return (
    <div className={style.wrapper}>

        <header className={style.header}>        
            <img src={logo} alt="logo" />        
        </header>

        <div className={style.yogatytle}>   
            <img src={yogatitle} alt="yogatitle" />        
        </div>
        <h2 className={style.tytle}> Подойдет для вас, если: </h2>
        <div>
        <img src={opisanie} alt="opisanie" />
        </div >
        <h2 className={style.subtitle}> Направления: </h2>
        <div className={style.description} >
        <div >
            <img src={deskript1} alt="deskript1" />  
        </div>
        <div>
            <img src={deskript2} alt="deskript2" />
        </div>
        </div>
        
        <div className={style.medicaladvice}>
        <img src={medicaladvice} alt="medicaladvice" />
        </div >
        <Coursent />

        
    </div>
    
)
}