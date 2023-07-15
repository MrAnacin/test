import logo from '../../image/logo.png';
import dancefitnes from "../../image/dancfitnes.png"
import Coursent from '../../components/coursEnt/coursent';
import style from "./danceFitness.module.scss";
import circle1 from '../../image/circle1.png';
import circle2 from '../../image/circle2.png';
import circle3 from '../../image/circle3.png';

export default function Dancefitnes() {

return (
    <div className={style.wrapper}>
        <header className={style.header}>                     
            <img src={logo} alt="logo" />               
        </header>
        <div className={style.top}>
            <div className={style.top__text}>Бодифлекс</div>       
            <img src={dancefitnes} className={style.top__image} alt="bodyflex" />
        </div>
        <div className={style.tytle}>
            <h2 className={style.tytle__text}> Подойдет для вас, если: </h2>        
            <div className={style.tytle__description}>
                <div className={style.circle}>
                    <img src={circle1} className={style.circle__image} alt="circle1" />
                    <p className={style.circle__text}> 
                    Хотите укрепить мышцы, но тренировки в тренажерном зале для вас скучные и однообразные.
                    </p>    
                </div>
                <div className={style.circle}>
                    <img src={circle2} className={style.circle__image} alt="circle2" />
                    <p className={style.circle__text}>
                        Хотите сбросить лишний вес, но нет желания мучать себя диетами.   
                    </p>                
                </div>
                <div className={style.circle}>
                    <img src={circle3} className={style.circle__image} alt="circle3" />
                    <p className={style.circle__text}>
                        Любите танцы и хотите совместить приятное с полезным.
                    </p>                
                </div>                                             
            </div >
        </div>
        <div className={style.description}>
            <h2 className={style.description__title}> Направления: </h2>
            <div className={style.description__list}>        
                <ul>
                    <li className={style.text_fakt}>Зумба</li>
                    <li className={style.text_fakt}>Dance-mix</li>
                    <li className={style.text_fakt}>Caribbean-mix</li>
                </ul>                
            </div>        
            <p className={style.description__text}>Фитнес и танцы – что между ними общего?
            А то, что они могут великолепно сочетаться и оказывать просто восхитительный эффект на ваше тело!
            Объединение хореографии и аэробики – это необычно и интересно, именно так родился танцевальный фитнес, 
            которым вы теперь можете заниматься дома. Достичь отличной формы и при этом получить удовольствие вам поможет видео для похудения, 
            которое мы представляем на этой странице – делайте упражнения, танцуйте и чувствуйте, как ваше тело меняется в лучшую сторону!
            </p>
        </div>
        <Coursent />        
    </div>    
)
}