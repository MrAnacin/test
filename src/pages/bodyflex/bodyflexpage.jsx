import logo from '../../image/logo.png';
import bodyflex from "../../image/bodyflex.png"
import Coursent from '../../components/coursEnt/coursent';
import style from "./bodyflex.module.scss";
import circle1 from '../../image/circle1.png';
import circle2 from '../../image/circle2.png';
import circle3 from '../../image/circle3.png';

export default function Bodyflex() {

return (
    <div className={style.wrapper}>
        <header className={style.header}>                     
            <img src={logo} alt="logo" />               
        </header>
        <div className={style.top}>
            <div className={style.top__text}>Бодифлекс</div>       
            <img src={bodyflex} className={style.top__image} alt="bodyflex" />
        </div>
        <div className={style.tytle}>
            <h2 className={style.tytle__text}> Подойдет для вас, если: </h2>        
            <div className={style.tytle__description}>
                <div className={style.circle}>
                    <img src={circle1} className={style.circle__image} alt="circle1" />
                    <p className={style.circle__text}> 
                    Хотите укрепить легкие и снизить вероятность заболеваний дыхательной системы.
                    </p>    
                </div>
                <div className={style.circle}>
                    <img src={circle2} className={style.circle__image} alt="circle2" />
                    <p className={style.circle__text}>
                        Улучшить пищеварение.   
                    </p>                
                </div>
                <div className={style.circle}>
                    <img src={circle3} className={style.circle__image} alt="circle3" />
                    <p className={style.circle__text}>
                        Ускорить метаболизм.
                    </p>                
                </div>                                             
            </div >
        </div>
        <div className={style.description}>
            <h2 className={style.description__title}> Направления: </h2>
            <div className={style.description__list}>        
                <ul>
                    <li className={style.text_fakt}>базовый</li>
                    <li className={style.text_fakt}>продвинутый</li>
                </ul>                
            </div>        
            <p className={style.description__text}>BodyFlex – система, в которой особым образом сочетаются физические упражнения на укрепление и растяжку мышц,
                и дыхательная гимнастика. Такое сочетание приводит к ряду положительных эффектов, которые практически невозможно достичь с помощью других направлений фитнеса.
                Одна из самых интересных особенностей данной системы заключается в том, что это эффективный фитнес дома.

                Весь смысл бодифлекса сводится к правильному дыханию, благодаря которому упражнения на растяжку и укрепление мышц приобретают свою эффективность.
                При выдыхании воздуха и задержке дыхания организм на короткое время испытывает кислородное голодание,
                в крови накапливается углекислый газ, что приводит к запуску некоторых физиологических процессов, типичных для ситуации «бей или беги».
                То есть, организм приходит в состояние повышенной готовности и способен выполнять быстрые и энергичные действия.
            </p>
        </div>
        <Coursent />        
    </div>    
)
}