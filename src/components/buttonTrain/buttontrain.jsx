import style from "./buttontrain.module.scss"

const Buttontrain = ({ exercise, number, onClick }) => {
    return (
        <button className={style.button} onClick={onClick}>
            <div className={style.wrapper}>
                <p className={style.button__title}>{exercise}</p>
                <p className={style.button__text}> {number}</p>
            </div>
        </button>
    )
}

export default Buttontrain