import Link from 'next/link';
import styles from './Navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.brand} href="/">
        Los Mejores Productos
      </Link>
    </nav>
  );
};

export default NavBar;
