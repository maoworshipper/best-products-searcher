import styles from './Sidebar.module.scss';

const Sidebar = ({ title = '', children }) => {
  return (
    <>
      <div className={styles.sidebar} role="navigation">
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
