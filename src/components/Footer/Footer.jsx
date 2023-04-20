import styles from './Footer.module.scss';

const dataDeveloper = {
  copy: 'Desarrollado por: Mauricio Martínez',
  textLink: 'github.com/maoworshipper',
  link: 'https://github.com/maoworshipper',
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{dataDeveloper.copy}</p>
      <a href={dataDeveloper.link} target="_blank" rel="noreferrer">
        {`<< ${dataDeveloper.textLink} >>`}
      </a>
    </footer>
  );
};

export default Footer;
