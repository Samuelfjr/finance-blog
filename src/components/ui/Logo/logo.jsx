import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={360}
        height={26}
        alt="logo do Blog Rubens Machado"
      />
    </Link>
  );
};

export default Logo;
