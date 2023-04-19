import { useEffect } from 'react';
import { useOutsideClick } from '@hooks/useOutsideClick';
import styles from './Modal.module.scss';

const Modal = ({ children, isOpen, onClose }) => {
  const handleClickOutside = () => {
    onClose();
  };
  const ref = useOutsideClick(handleClickOutside);

  useEffect(() => {
    if (isOpen) {
      ref.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      className={isOpen ? `${styles.modal} ${styles.open}` : styles.modal}
      role="dialog"
    >
      <div className={styles.content} ref={ref}>
        <button className={styles.close} onClick={onClose} title="Cerrar" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
