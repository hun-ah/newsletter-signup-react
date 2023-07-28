import styles from './list.module.css';
import { ReactComponent as Checkmark } from '../../assets/icon-list.svg';

const List = () => {
  const listItems = [
    'Product discovery and building what matters',
    'Measuring to ensureupdates are a success',
    'And much more!',
  ];
  return (
    <ul className={styles.list}>
      {listItems.map((item) => (
        <li key={item} className={styles.listItem}>
          <Checkmark />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
