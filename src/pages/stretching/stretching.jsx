import logo from '../../image/logo_log.png';
import stretching from '../../image/stretchingtitle.png';
import Coursent from '../../components/coursEnt/coursent';
import style from "./stretching.module.scss";
import circle1 from '../../image/circle1.png';
import circle2 from '../../image/circle2.png';
import circle3 from '../../image/circle3.png';

export default function Stretching() {
    return (  
    <div className={style.wrapper}>
        <header className={style.header}>                     
            <img src={logo} alt="logo" />               
        </header>
        <div className={style.top}>
            <img src={stretching} className={style.top__image} alt="stretching" />
        </div>
        <div className={style.tytle}>
            <h2 className={style.tytle__text}> Подойдет для вас, если: </h2>        
            <div className={style.tytle__description}>
                <div className={style.circle}>
                    <img src={circle1} className={style.circle__image} alt="circle1" />
                    <p className={style.circle__text}> 
                    Хотите подтянуть тело, смоделировать мышечный корсет.
                    </p>    
                </div>
                <div className={style.circle}>
                    <img src={circle2} className={style.circle__image} alt="circle2" />
                    <p className={style.circle__text}>
                    Улучшить осанку и координацию.   
                    </p>                
                </div>
                <div className={style.circle}>
                    <img src={circle3} className={style.circle__image} alt="circle3" />
                    <p className={style.circle__text}>
                    Улучшить кровообращение и обмен веществ.
                    </p>                
                </div>                                             
            </div >
        </div>
        <div className={style.description}>
            <h2 className={style.description__title}> Направления: </h2>
            <div className={style.description__list}>        
                <ul>
                    <li>статический</li>
                    <li>динамический</li>
                    <li>пассивный</li>
                    <li>активный</li> 
                </ul>                
            </div>        
                <p className={style.description__text}>Стретчинг (или stretching) – это система упражнений, целью которых является разогрев и растяжка мышц и связок.
                При этом стретчинг – не просто комплекс упражнений для разминки перед тренировкой, а самостоятельное направление фитнеса,
                которое может использоваться как в комплексе с другими направлениями, так и самостоятельно.
                Стретчинг в домашних условиях может использоваться для многих целей: 
                выступает в качестве гимнастики в период восстановления после травм;
                входит в состав программы для похудения;
                помогает развить гибкость и пластичность, при правильном подходе вы сядете на шпагат через несколько недель;
                Это эффективный способ расслабиться после трудного дня.
            </p>
        </div>
        <Coursent />        
    </div>  
     )
}