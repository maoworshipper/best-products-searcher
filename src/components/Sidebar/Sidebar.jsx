import styles from './Sidebar.module.scss';

const Sidebar = ({ title = '', type = 'sidebar', children }) => {
  return (
    <>
      <div
        className={`${styles.sidebar} ${type === 'sideMenu' ? styles.sideMenu : ''}`}
        role="navigation"
      >
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
