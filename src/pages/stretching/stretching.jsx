import logo from '../../image/logo.png';
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

        <div className={style.stretching}>
            <div className={style.stretchingtext}>Стретчинг</div>       
            <img src={stretching} className={style.image} alt="stretching" />
                    
        </div>
        
        <div className={style.stretching_tytle}>
            <h2 className={style.tytle}> Подойдет для вас, если: </h2>        
        </div>
        
        
        <div className={style.text_description}>

            <div className={style.circle_text}>
            <img src={circle1} className={style.circle} alt="circle1" />
            <p className={style.text_fakt}> 
              Хотите подтянуть тело, смоделировать мышечный корсет.
            </p>    
            </div>

            <div className={style.circle_text}>
            <img src={circle2} className={style.circle} alt="circle2" />
            <p className={style.text_fakt}>
                Улучшить осанку и координацию.   
            </p>                
            </div>

            <div className={style.circle_text}>
            <img src={circle3} className={style.circle} alt="circle3" />
            
            <p className={style.text_fakt}>
                Улучшить кровообращение и обмен веществ.
            </p>                
            </div>               
                                          
        </div >

        <h2 className={style.subtitle}> Направления: </h2>
            <div className={style.description} >        
            <ul>
                <li className={style.text_fakt}>статический</li>
                <li className={style.text_fakt}>динамический</li>
                <li className={style.text_fakt}>пассивный</li>
                <li className={style.text_fakt}>активный</li>          
                         
            </ul>                
            </div>        
        <div className={style.medicaladvice}>
        <p className={style.text_fakt}>Стретчинг (или stretching) – это система упражнений, целью которых является разогрев и растяжка мышц и связок. При этом стретчинг – не просто комплекс упражнений для разминки перед тренировкой, а самостоятельное направление фитнеса, которое может использоваться как в комплексе с другими направлениями, так и самостоятельно.
        Стретчинг в домашних условиях может использоваться для многих целей: 
        выступает в качестве гимнастики в период восстановления после травм;
        входит в состав программы для похудения;
        помогает развить гибкость и пластичность, при правильном подходе вы сядете на шпагат через несколько недель;
        Это эффективный способ расслабиться после трудного дня.
        </p>
        </div >
        <Coursent />        
    </div>    
)
}