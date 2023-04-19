import { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@redux/productsSlice';
import styles from './ProductCard.module.scss';

const conditions = {
  new: 'Nuevo',
  used: 'Usado',
};

const availableTexts = {
  0: 'No disponible',
  1: 'Última unidad disponible',
  2: 'unidades disponibles',
};

export const ProductCard = () => {
  const [sale, setSale] = useState(false);
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.products);
  const available =
    item?.available_quantity >= 2
      ? `${item?.available_quantity} ${availableTexts[2]}`
      : availableTexts[item?.available_quantity] || '';

  const renderDescription = () => {
    const description = item?.description?.split(/\r?\n/) || [];
    return description
      ? description.map((line, index) => (
          <span key={`item-description-line-${index}`}>
            {line}
            <br />
          </span>
        ))
      : null;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setSale(true);
  };

  if (!item) return null;

  return (
    <>
      <div className={styles.card}>
        {item?.pictures?.length > 0 && (
          <div className={styles.image} role="img">
            <Image
              src={item?.pictures[0]?.secure_url}
              width={200}
              height={300}
              alt={item?.title}
            />
          </div>
        )}
        <div className={styles.content}>
          <h3 className={styles.title}>{item?.title}</h3>
          <p className={styles.condition}>{conditions[item?.condition]}</p>
          <p className={styles.description}>{renderDescription()}</p>
          <p className={styles.extraInfo}>{available}</p>
          <p className={styles.extraInfo}>{item?.warranty}</p>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.button}
            onClick={() => handleAddToCart(item?.id)}
            disabled={sale}
            name="addToCart"
            role="button"
          >
            {sale ? 'Agregado al carrito' : 'Comprar'}
          </button>
          <p className={styles.price}>
            <span className={styles.label}>Precio</span>
            <span className={styles.priceValue}>
              {`${item?.currency_id} $ ${item?.price}`}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
