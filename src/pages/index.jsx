import { useDispatch, useSelector } from 'react-redux';
import { removeSingleItem } from '@redux/productsSlice';
import Layout from '@components/Layout/Layout';
import NavBar from '@components/Navbar/Navbar';
import CardsGrid from '@components/CardsGrid/CardsGrid';
import InputSearch from '@components/InputSearch/InputSearch';
import Modal from '@components/Modal/Modal';
import { ProductCard } from '@components/Card/ProductCard';
import styles from '@styles/Home.module.scss';
import Sidebar from '@components/Sidebar/Sidebar';
import Filters from '@components/Filters/Filters';

export default function Home() {
  const { item, available_filters } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <Layout>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <h1 className={styles.title}>Busca tu producto favorito</h1>
            <InputSearch />
          </div>

          <div className={styles.mainContainer}>
            {available_filters && available_filters.length > 0 && (
              <Sidebar title="Filtros">
                <Filters />
              </Sidebar>
            )}

            <CardsGrid />
          </div>
        </div>
      </Layout>
      <Modal
        isOpen={item ? true : false}
        onClose={() => dispatch(removeSingleItem())}
      >
        {item ? <ProductCard {...item} /> : null}
      </Modal>
    </>
  );
}

export async function getServerSideProps(req) {
  return {
    props: {},
  };
}
