import style from './input.module.scss';
const Input = ({onChange}) => {
    const handleChange = (e) => {
		onChange(e);
	};
    return (
        <input
            className={style.input}
            placeholder='Введите значение'
            onChange={handleChange}
        />
    )
}

export default Input