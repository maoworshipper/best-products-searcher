import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Sidebar from '@components/Sidebar/Sidebar';
import Filters from '@components/Filters/Filters';
import styles from './Navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.brand} href="/">
        <h1>Los Mejores Productos</h1>
      </Link>
      <HamburgerMenu >
      <Sidebar title="Filtros" type="sideMenu">
        <Filters />
      </Sidebar>
      </HamburgerMenu>
    </nav>
  );
};

export default NavBar;
