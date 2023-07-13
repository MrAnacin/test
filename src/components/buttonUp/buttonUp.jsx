import style from "./buttonUp.module.scss"

const ButtonUp = ({ text }) => {
    return (
        <button className={style.button}>{text}</button>
    )
}

export default ButtonUp