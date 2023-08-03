import styles from './form.module.css';
import Button from '../Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [err, setErr] = useState(false);
  const [userInput, setUserInput] = useState({ email: '' });
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(userInput)) {
      setErr(false);
      navigate('/success');
    } else {
      setErr(true);
    }
  };

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={() => handleForm(event)}>
      <div className={styles.inputContainer}>
        <div className={styles.inputLabels}>
          <label className={styles.label} htmlFor='email'>
            Email address
          </label>
          {err && <span className={styles.error}>Valid email required</span>}
        </div>
        <input
          className={`${styles.input} ${err ? styles.inputErr : styles.input}`}
          type='text'
          placeholder='email@company.com'
          id='email'
          onChange={() => handleInput(event)}
          onFocus={() => setErr(false)}
        />
      </div>
      <Button text='Subscribe to monthly newsletter' />
    </form>
  );
};

export default Form;
