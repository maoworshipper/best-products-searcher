import styles from './Modal.module.scss';

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div className={isOpen ? `${styles.modal} ${styles.open}` : styles.modal}>
      <div className={styles.content}>
        <button className={styles.close} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
