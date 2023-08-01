import styles from './button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ text, link }) => {
  return link ? (
    <Link className={styles.button} to='/'>
      {text}
    </Link>
  ) : (
    <button className={styles.button}>{text}</button>
  );
};

export default Button;
