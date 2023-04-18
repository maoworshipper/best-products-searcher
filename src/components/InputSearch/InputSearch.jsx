import { useEffect, useRef } from 'react';
import { useFetch } from '@hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addResults } from '@redux/productsSlice';
import styles from './InputSearch.module.scss';

const texts = {
  placeholder: 'Ejemplo: Power query',
  title: 'Buscar',
};

const InputSearch = () => {
  const search = useRef(null);
  const { data, stream, fetchData } = useFetch();
  const dispatch = useDispatch();

  const handleClick = async () => {
    search.current.value !== "" && fetchData(`api/search?query=${search.current.value}`, {}, 'search');
  };

  const handleInput = (e) => {
    search.current.value !== "" && e.keyCode === 13 && handleClick();
  };

  useEffect(() => {
    if (data && stream === 'search') {
      console.log(data);
      dispatch(addResults(data));
    }
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
          onClick={handleClick}
          title={texts.title}
        >
          <span className={styles.icon} />
        </button>
      </div>
    </>
  );
};

export default InputSearch;
