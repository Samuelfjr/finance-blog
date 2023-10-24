import { roboto } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";
import Logo from "../ui/Logo/logo";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <p className={roboto.className}>
          Compartilhando conhecimento sobre o mundo de finanças.
        </p>
        <div className={styles.containerIcons}>
          <div className={styles.container}>
            <Link href="/">
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
              <Link href="/">
                <div className={styles.boxUp}>
                  <Image src="/expand-less.svg" alt="" width={24} height={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
