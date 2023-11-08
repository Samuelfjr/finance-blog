import { roboto } from "@/styles/fonts";
import Link from "next/link";
import Logo from "@/components/ui/Logo/logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.containerHeader}>
        <Logo />

        <ul className={styles.navBar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/support-material">Materiais de Apoio</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
          <li>
            <Link className={styles.btn} href="/article">
              Artigos
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
