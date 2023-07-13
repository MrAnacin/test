import logo from '../../image/logo.png';
import stretching from '../../image/stretching.png';
import Coursent from '../../components/coursEnt/coursent';
import style from "./stretching.module.scss";


export default function Stretching() {

return (
    <div className={style.wrapper}>

        <header className={style.header}>        
            <img src={logo} alt="logo" />        
        </header>

        <div className={style.yogatytle}>   
            <img src={stretching} alt="stretching" />        
        </div>
        <h2 className={style.tytle}> Подойдет для вас, если: </h2>
        <div>
            <p>
                1.Хотите подтянуть тело, смоделировать мышечный корсет
                2.Улучшить осанку и координацию
                3.Улучшить кровообращение и обмен веществ

            </p>
        </div >
        <h2 className={style.subtitle}> Направления: </h2>
            <div className={style.description} >        
            <p>
                статический
                динамический
                пассивный
                активный
            </p>                
            </div>        
        <div className={style.medicaladvice}>
        <p>Стретчинг (или stretching) – это система упражнений, целью которых является разогрев и растяжка мышц и связок. При этом стретчинг – не просто комплекс упражнений для разминки перед тренировкой, а самостоятельное направление фитнеса, которое может использоваться как в комплексе с другими направлениями, так и самостоятельно.
Стретчинг в домашних условиях может использоваться для многих целей: 
Выступает в качестве гимнастики в период восстановления после травм;
Входит в состав программы для похудения;
Помогает развить гибкость и пластичность, при правильном подходе вы сядете на шпагат через несколько недель;
Это эффективный способ расслабиться после трудного дня.
        </p>
        </div >
        <Coursent />        
    </div>    
)
}