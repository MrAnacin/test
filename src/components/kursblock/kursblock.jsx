import style from './kursblock.module.scss';
import { Link } from 'react-router-dom';

const Kursblock = ({ imgblock }) => {
  return (
    <button className={style.kursblock}>
      <Link to="/yogapage">
        <img src={imgblock} alt="img" className={style.image} />
      </Link>
    
    </button>
  );
};

export default Kursblock;
