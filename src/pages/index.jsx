import styles from '@styles/Home.module.scss';
import Layout from '@components/Layout/Layout';
import NavBar from '@components/Navbar/Navbar';
import CardsList from '@components/CardsList/CardsList';
import InputSearch from '@components/InputSearch/InputSearch';

export default function Home() {
  return (
    <>
      <Layout>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <h1 className={styles.title}>Busca tu producto favorito</h1>
            <InputSearch />
            <div className={styles.gridContainer}>
              <CardsList />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(req) {
  return {
    props: {},
  };
}
