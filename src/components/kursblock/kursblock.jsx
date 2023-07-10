// import style from "./app.module.scss"
import style from "./kursblock.module.scss"

const Kursblock = (props) => {

    return (
            <button className={style.kursblock}>
                <img src={props.imgblock} alt="img" />
            </button>

    )
}

export default Kursblock
