import logo from '../../image/logo_log.png';
import step from "../../image/steptitle.png"
import Coursent from '../../components/coursEnt/coursent';
import style from "./step.module.scss";
import circle1 from '../../image/circle1.png';
import circle2 from '../../image/circle2.png';
import circle3 from '../../image/circle3.png';

export default function Step() {

return (
    <div className={style.wrapper}>
        <header className={style.header}>                     
            <img src={logo} alt="logo" />               
        </header>
        <div className={style.top}>
            <img src={step} className={style.top__image} alt="step" />
        </div>
        <div className={style.tytle}>
            <h2 className={style.tytle__text}> Подойдет для вас, если: </h2>        
            <div className={style.tytle__description}>
                <div className={style.circle}>
                    <img src={circle1} className={style.circle__image} alt="circle1" />
                    <p className={style.circle__text}> 
                    Хотите укрепить дыхательную и сердечно-сосудистой системы.
                    </p>    
                </div>
                <div className={style.circle}>
                    <img src={circle2} className={style.circle__image} alt="circle2" />
                    <p className={style.circle__text}>
                    Быстрый сбросить лишние килограммы.  
                    </p>                
                </div>
                <div className={style.circle}>
                    <img src={circle3} className={style.circle__image} alt="circle3" />
                    <p className={style.circle__text}>
                    Улучшить настроение, повысить жизненный тонус.
                    </p>                
                </div>                                             
            </div >
        </div>
        <div className={style.description}>
            <h2 className={style.description__title}> Направления: </h2>
            <div className={style.description__list}>        
                <ul>
                    <li className={style.text_fakt}>Для начинающих</li>
                    <li className={style.text_fakt}>Для похудения</li>
                    <li className={style.text_fakt}>Для детей</li>
                </ul>                
            </div>        
            <p className={style.description__text}>Степ-аэробика – направление фитнеса, основанное на наборе аэробных упражнений,
            выполняемых с помощью специальной ступеньки (степ-платформы). Данное направление было разработано в 1989 году Джиной Миллер:
            травмировав колено, она обратилась к различным методикам восстановления сустава, 
            но наибольший эффект показали простые упражнения в виде шагов на молочном ящике. 
            Впоследствии эти упражнения Миллер положила в основу целого комплекса, который и стал называться степ-аэробикой.
            Занятия степ-аэробикой состоят из комплексов в виде различного сочетания шагов, 
            выполняемые под музыку с довольно высоким темпом. 
            Каждое занятие длится от 30 до 50 минут в достаточно высоком темпе без остановок на отдых – для передышки используются переходы на простые шаги и наиболее простые упражнения. 
            Такой режим тренировок приводит к эффективному сжиганию калорий, укреплению суставов и общему улучшению состояния здоровья, что и стало основой высокой популярности нового направления.
            </p>
        </div>
        <Coursent />        
    </div>    
)
}