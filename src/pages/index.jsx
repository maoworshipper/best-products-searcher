import { useDispatch, useSelector } from 'react-redux';
import { removeSingleItem } from '@redux/productsSlice';
import Layout from '@components/Layout/Layout';
import NavBar from '@components/Navbar/Navbar';
import CardsGrid from '@components/CardsGrid/CardsGrid';
import InputSearch from '@components/InputSearch/InputSearch';
import Modal from '@components/Modal/Modal';
import { ProductCard } from '@components/Card/index';
import styles from '@styles/Home.module.scss';
import Sidebar from '@components/Sidebar/Sidebar';
import Filters from '@components/Filters/Filters';
import Footer from '@components/Footer/Footer';

export default function Home() {
  const { item, available_filters, filters, results } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <Layout>
        <NavBar />
        <div className={styles.container}>
          <div className={`${styles.searchContainer} ${results?.length > 0 ? styles.completed : ''}`}>
            <h2 className={styles.title}>
              Encuentra <span>tu producto favorito</span>
            </h2>
            <div className={styles.search}>
              <InputSearch />
            </div>
          </div>

          <div className={styles.mainContainer}>
            {((available_filters && available_filters.length > 0) || filters?.length > 0) && (
              <Sidebar title="Filtros">
                <Filters />
              </Sidebar>
            )}

            <CardsGrid />
          </div>
        </div>
        <Footer />
      </Layout>
      <Modal isOpen={item ? true : false} onClose={() => dispatch(removeSingleItem())}>
        <ProductCard {...item} />
      </Modal>
    </>
  );
}
