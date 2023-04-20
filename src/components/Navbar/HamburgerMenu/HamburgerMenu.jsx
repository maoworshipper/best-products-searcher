import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { results } = useSelector((state) => state.products);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (!results) return null;

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={`${styles.hamburgerMenuButton} ${isOpen ? styles.isActive : ''}`}
        onClick={handleClick}
      >
        <span className={styles.hamburgerMenuIcon}></span>
        <span className={styles.hamburgerMenuIcon}></span>
        <span className={styles.hamburgerMenuIcon}></span>
      </button>
      <nav className={`${styles.hamburgerMenuNav} ${isOpen ? styles.isActive : ''}`}>
        {children}
      </nav>
    </div>
  );
};

export default HamburgerMenu;
