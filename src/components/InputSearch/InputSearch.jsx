import { useEffect, useRef } from 'react';
import { useFetch } from '@hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addResults } from '@redux/productsSlice';
import styles from './InputSearch.module.scss';

const texts = {
  placeholder: 'Sillas, libros, etc.',
  title: 'Buscar',
};

const InputSearch = () => {
  const search = useRef(null);
  const { data, stream, error, fetchData } = useFetch();
  const dispatch = useDispatch();

  const submitSearch = async () => {
    search.current.value !== '' &&
      fetchData(`api/search?q=${search.current.value}`);
  };

  const handleInput = (e) => {
    search.current.value !== '' && e.keyCode === 13 && submitSearch();
  };

  useEffect(() => {
    data && stream === 'search' && dispatch(addResults(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, stream]);

  return (
    <>
      <div className={styles.wrapperSearch}>
        <input
          type="text"
          name="search"
          placeholder={texts.placeholder}
          maxLength={60}
          className={styles.input}
          ref={search}
          onKeyDown={handleInput}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={submitSearch}
          title={texts.title}
        >
          <span className={styles.icon} />
        </button>
      </div>
      {error && <p className={styles.error}>No es posible realizar la búsqueda. Por favor intente más tarde.</p>}
    </>
  );
};

export default InputSearch;
