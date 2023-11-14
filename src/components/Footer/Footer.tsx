import { roboto } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";
import Logo from "../ui/Logo/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <p className={roboto.className}>
          Compartilhando conhecimento sobre o mundo de finanças.
        </p>
        <div className={styles.containerIcons}>
          <div className={styles.container}>
            <Link id="contact" href="https://wa.me/5512997552882">
              <Image
                src="/whatsapp.svg"
                alt="whatsapp"
                width={24}
                height={24}
              />
            </Link>
            <Link className={styles.instagramIcon} href="/">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
            <div className={styles.containerBoxUp}>
              <Link href="#home">
                <div className={styles.boxUp}>
                  <Image src="/expand-less.svg" alt="" width={24} height={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
