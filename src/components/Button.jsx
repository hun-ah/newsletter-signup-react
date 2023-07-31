import styles from './button.module.css';

const Button = ({ text, className }) => {
  return (
    <button className={`${styles.button} ${styles[className]}`}>{text}</button>
  );
};

export default Button;
