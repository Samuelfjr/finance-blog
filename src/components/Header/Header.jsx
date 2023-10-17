import { roboto } from '@/styles/fonts';
import Image from 'next/image'
import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.containerHeader}>

        <Image 
          src="/logo.svg"
          width={360}
          height={26}
          alt='logo do Blog Rubens Machado'
        />

        <ul className={styles.navBar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Artigos</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
           <li>
            <Link href="/">Materiais de Apoio</Link>
          </li>
        </ul>      
 
      </div>
    </section>
  );
};

export default Header;