import { roboto } from '@/styles/fonts';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.header}>
      <span>Novos artigos todas as terças!</span>
    </section>
  );
};

export default Header;