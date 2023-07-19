import logo from '../../image/logo_log.png';
import yogatitle from '../../image/yogatitle.png';
import Coursent from '../../components/coursEnt/coursent';
import style from "./yogapage.module.scss";
import circle1 from '../../image/circle1.png';
import circle2 from '../../image/circle2.png';
import circle3 from '../../image/circle3.png';

export default function Yoga() {
    return (  
    <div className={style.wrapper}>
        <header className={style.header}>                     
            <img src={logo} alt="logo" />               
        </header>
        <div className={style.top}>
            <img src={yogatitle} className={style.top__image} alt="yoga" />
        </div>
        <div className={style.tytle}>
            <h2 className={style.tytle__text}> Подойдет для вас, если: </h2>        
            <div className={style.tytle__description}>
                <div className={style.circle}>
                    <img src={circle1} className={style.circle__image} alt="circle1" />
                    <p className={style.circle__text}> 
                    Давно хотели попробовать йогу, но не решались начать.
                    </p>    
                </div>
                <div className={style.circle}>
                    <img src={circle2} className={style.circle__image} alt="circle2" />
                    <p className={style.circle__text}>
                    Хотите укрепить позвоночник, избавиться от болей в спине и суставах.   
                    </p>                
                </div>
                <div className={style.circle}>
                    <img src={circle3} className={style.circle__image} alt="circle3" />
                    <p className={style.circle__text}>
                    Ищете активность, полезную для тела и души.
                    </p>                
                </div>                                             
            </div >
        </div>
        <div className={style.description}>
            <h2 className={style.description__title}> Направления: </h2>
            <div className={style.description__list}>        
                <ul>
                    <li>Йога для новичков</li>
                    <li>Классическая йога</li>
                    <li>Йогатерапия</li>
                    <li>Хатха-йога</li> 
                    <li>Аштанга-йога</li> 
                </ul>                
            </div>        
                <p className={style.description__text}>Йога - это философия здорового образа жизни. 
                Тот, кто занимается йогой, становится здоровее и выносливее, после занятий чувствует прилив сил, 
                а также с новой силой может ощутить вкус к жизни.
                Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц,
                тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение,
                заряжают бодростью и помогают противостоять стрессам.
            </p>
        </div>
        <Coursent />        
    </div>  
     )
}