import styles from './success.module.css';
import Button from '../../components/Button.jsx';
import { ReactComponent as Checkmark } from '../../assets/icon-list.svg';

const SuccessPage = () => {
  return (
    <div className={styles.container}>
      <Checkmark width={50} height={50} />
      <h1 className={styles.heading}>Thanks for subscribing!</h1>
      <p className={styles.paragraph}>
        A confirmation email has been sent to{' '}
        <span className={styles.bold}>ash@loremcompany.com</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <Button text='Dismiss message' link />
    </div>
  );
};

export default SuccessPage;
