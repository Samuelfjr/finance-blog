import { roboto } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.containerFooter}></div>
    </section>
  );
};

export default Footer;
