import styles from './form.module.css';
import List from '../../components/list/List';
import Form from '../../components/form/Form';

const FormPage = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.left} ${styles.innerDiv}`}>
        <h1 className={styles.heading}>Stay updated!</h1>
        <h2 className={styles.heading2}>
          Join 60,000+ product managers receiving monthly updates on:
        </h2>
        <List />
        <Form />
      </div>
      <div className={`${styles.right} ${styles.innerDiv}`}></div>
    </div>
  );
};

export default FormPage;
