import style from "./kursblock.module.scss"

const Kursblock = ({imgblock}) => {
    return (
        <button className={style.kursblock}>
            <img src={imgblock} alt="img" className={style.image} />
        </button>
    )
}

export default Kursblock
