import { roboto } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/ui/Logo/logo";

import styles from "./Header.module.scss";
import { useState } from "react";
import { MenuMobile } from "../MenuMobile/MenuMobile";

interface HeaderProps {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setMenuIsVisible }) => {
  const [localMenuIsVisible, setLocalMenuIsVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setLocalMenuIsVisible(!localMenuIsVisible);
    setMenuIsVisible(!localMenuIsVisible);
  };

  return (
    <section className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.containerLogo}>
          <Logo />
        </div>

        <ul className={styles.navBar}>
          <li>
            <Link id="home" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/support-material">Materiais de Apoio</Link>
          </li>
          <li>
            <Link href="#contact">Contato</Link>
          </li>
          <li></li>
          <li>
            <Link className={styles.btn} href="/article">
              Artigos
            </Link>
          </li>
        </ul>
        <div
          className={`${styles.containerMenu} ${
            localMenuIsVisible ? styles.visible : ""
          }`}
        >
          <button
            className={`${styles.menu} show-on-tablet`}
            onClick={toggleMenuVisibility}
          >
            <Image src="menu.svg" alt="" width={32} height={32} />
          </button>
        </div>

        <MenuMobile
          menuIsVisible={localMenuIsVisible}
          setMenuIsVisible={setLocalMenuIsVisible}
        />
      </div>
    </section>
  );
};

export default Header;
