import sprite from "../../image/sprite.svg"
import style from "./user.module.scss"

const User = () => {
    return (
        <div className={style.wrapper}>
            <svg className={style.avatar} alt="avatar">
                <use xlinkHref={`${sprite}#icon-avatar`}></use>
            </svg>
            <p>Сергей</p>
            <button className={style.button}>
                <svg alt="dropdown">
                    <use xlinkHref={`${sprite}#icon-dropdown`}></use>
                </svg>
            </button>
        </div>
    )
}

export default User