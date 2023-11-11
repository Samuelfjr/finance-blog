// ... (importações e código)

import Image from "next/image";
import Link from "next/link";
import styles from "@/components/MenuMobile/MenuMobile.module.scss";
import { useEffect } from "react";

interface MenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
  const toggleMenuVisibility = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <div
      className={`${styles.containerMenu} ${
        menuIsVisible ? styles.visible : ""
      }`}
    >
      <Image
        className={styles.img}
        src="/close.svg"
        alt=""
        width={32}
        height={32}
        onClick={() => setMenuIsVisible(false)}
      />
      <nav>
        <ul className={styles.navBar}>
          <li>
            <Link id="home" href="/" onClick={toggleMenuVisibility}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/support-material" onClick={toggleMenuVisibility}>
              Materiais de Apoio
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenuVisibility}>
              Contato
            </Link>
          </li>
          <li>
            <Link
              className={styles.btn}
              href="/article"
              onClick={toggleMenuVisibility}
            >
              Artigos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
