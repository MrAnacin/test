import style from './kursblock.module.scss';
import Yoga from '../../image/yoga.png';
import Stretching from '../../image/stretching.png';
import BodyFlex from '../../image/bodyflex.png';
import Step from '../../image/step.png';
import Dance from '../../image/dancfitnes.png'


const Kursblock = ({ imgblock }) => {

  const getImg = () => {
		switch (imgblock) {
		case "Yoga":
			return {
				img: Yoga,
				alt: "Йога",
			};
		case "Stretching":
			return {
				img: Stretching,
				alt: "Стретчинг",
			};
		case "StepAerobics":
			return {
				img: Step,
				alt: "Степ-аэробика",
			};
		case "DanceFitness":
			return {
				img: Dance,
				alt: "Танцевальный фитнес",
			};
		case "BodyFlex":
			return {
				img: BodyFlex,
				alt: "Бодифлекс",
			};

		default:
			break;
		}
  };
  
  const { img, alt } = getImg();
  
  return (
    <button className={style.kursblock} >      
        <img src={img}  alt={alt} className={style.image} /> 
    </button>
  );
};

export default Kursblock;
