import Button from "../../components/button/button"

import logo from "../../image/logo.png"
import style from "./profile.module.scss"

export default function Profile() {
    return (
        <>
            <header className={style.header}>
                <img src={logo} alt="logo"/>
                <div>Сергей</div>
            </header>
            <div className={style.user}>
                <h2>Moй профиль</h2>
                <div className={style.user__data}>
                    <h3 className={style.user__data_text}>Логин: sergey.petrov96 </h3>
                    <h3 className={style.user__data_text}>Пароль: 4fkhdj880d</h3>
                </div>
                <div className={style.user__button}>
                <Button
                    text="Редактировать логин"
                />
                <Button
                    text="Редактировать пароль"
                />
                </div>
            </div>
        </>
    )
}
