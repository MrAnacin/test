import Button from "../../components/buttons/button"
import User from "../../components/user/user"

import logo from "../../image/logo.png"
import style from "./profile.module.scss"

export default function Profile() {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logo} alt="logo"/>
                <User/>
            </header>
            <div className={style.user}>
                <h2 className={style.title}>Moй профиль</h2>
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
            <div className={style.course}>
                <h2 className={style.title}>Mои курсы</h2>
                <div className={style.course__content}>
                    <div>Курс 1 </div>
                    <div>Курс 2 </div>
                    <div>Курс 3 </div>                
                </div>
            </div>
        </div>
    )
}
