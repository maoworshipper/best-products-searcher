import Image from 'next/image';
import styles from './Card.module.scss';

const Card = ({ id, title, condition, price, thumbnail, handleClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={thumbnail} alt={title} width={100} height={100}  />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title} onClick={() => handleClick(id)}>{title?.length > 50 ? `${title?.substring(0, 50)}...` : title}</h3>
        <p className={styles.condition}>{condition}</p>
        <p className={styles.price}>$ {price}</p>
      </div>
    </div>
  );
};

export default Card;
