import Yogaimg from './yoga.png'
import style from "./yoga.module.scss"

const Yoga = () => {
    
    return (
        <div className={style.wrapper}>
            <div className={style.kursblock}>
            <img src={Yogaimg} alt="yoga" />
            </div>
            
        </div>
    )
}

export default Yoga