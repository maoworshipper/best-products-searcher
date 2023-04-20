import Link from 'next/link';
import styles from './Navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.brand} href="/">
        <h1>Los Mejores Productos</h1>
      </Link>
    </nav>
  );
};

export default NavBar;
