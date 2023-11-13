import Image from "next/image";
import Link from "next/link";
import styles from "@/components/ui/Logo/logo.module.scss";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className={styles.logo}
        src="/logo.svg"
        width={360}
        height={26}
        alt="logo do Blog Rubens Machado"
      />
    </Link>
  );
};

export default Logo;
