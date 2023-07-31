import style from "./buttonUp.module.scss"

const ButtonUp = ({ text, onClick }) => {
    return (
        <button className={style.button} onClick={onClick}>{text}</button>
    )
}

export default ButtonUp