import styles from "../Error/Error.module.scss";
import Link from "next/link";
import { roboto } from "@/styles/fonts";

const Error = ({ text }) => {
  return (
    <div className={styles.error}>
      <h2 className={roboto.className}>{text}</h2>
      <div className={styles.linkContainer}>
        <Link className={roboto.className} href="/">
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default Error;
