import style from "./buttontrain.module.scss"

const Buttontrain = ({ exerciseNumber }) => {
    return (
        <button className={style.button}>{exerciseNumber}</button>
    )
}

export default Buttontrain