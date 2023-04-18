import Image from 'next/image';
import styles from './Card.module.scss';

export const Card = ({ id, title, condition, price, thumbnail, handleClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={thumbnail} alt={title} width={100} height={100}  />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title} onClick={() => handleClick(id)}>{title?.length > 80 ? `${title?.substring(0, 80)}...` : title}</h3>
        <p className={styles.condition}>{condition}</p>
        <p className={styles.price}>$ {price}</p>
      </div>
    </div>
  );
};