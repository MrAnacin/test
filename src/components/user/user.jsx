import sprite from "../../image/sprite.svg"
import style from "./user.module.scss"

const User = () => {

    const user = localStorage.getItem("userEmail");

    return (
        <div className={style.wrapper}>
            <svg className={style.avatar} alt="avatar">
                <use xlinkHref={`${sprite}#icon-avatar`}></use>
            </svg>
            <p>{user}</p>
            <button className={style.button}>
                <svg alt="dropdown" className={style.dropdown}>
                    <use xlinkHref={`${sprite}#icon-dropdown`}></use>
                </svg>
            </button>
        </div>
    )
}

export default User