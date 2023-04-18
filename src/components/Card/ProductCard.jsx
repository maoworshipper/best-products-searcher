import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({ id, title, price, currency_id, pictures, condition, free_shipping }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const { item } = useSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleViewDetail = (id) => {
    dispatch(addSingleItem(id));
    router.push(`/product/${id}`);
  };

  const handleGoBack = () => {
    dispatch(removeSingleItem());
    router.back();
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card__image">
          <Image src={pictures[0]?.secure_url} width={200} height={200} alt={title} />
        </div>
        <div className="product-card__content">
          <h3 className="product-card__title">{title}</h3>
          <p className="product-card__condition">{condition}</p>
          <p className="product-card__price">$ {price}</p>
          <div className="product-card__actions">
            <button
              className="product-card__button"
              onClick={() => handleAddToCart(product)}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
