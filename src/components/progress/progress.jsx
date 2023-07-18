import style from "./progress.module.scss"

const Progress = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <p className={style.content__title}>Мой прогресс по тренировке 2:</p>
                <div className={style.content__progress}>
                    <div className={style.list}>
                        <p className={style.content__progress_text}>Наклоны вперед</p>
                        <progress max="100" value="45" className={style.content__progress_scale} />
                    </div>
                    <div className={style.list}>
                        <p className={style.content__progress_text}>Наклоны назад</p>
                        <progress max="100" value="45" className={style.content__progress_scale}/>
                    </div>
                    <div className={style.list}>
                        <p className={style.content__progress_text}>Поднятие ног, согнутых в коленях</p>
                        <progress max="100" value="45" className={style.content__progress_scale}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress