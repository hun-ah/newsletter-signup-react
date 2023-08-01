import styles from './form.module.css';
import Button from '../Button';

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor='email'>
          Email address
        </label>
        <input
          className={styles.input}
          type='text'
          placeholder='email@company.com'
          id='email'
        />
      </div>
      <Button text='Subscribe to monthly newsletter' />
    </form>
  );
};

export default Form;
