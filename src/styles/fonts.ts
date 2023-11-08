import { Roboto, Sora } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const sora = Sora({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export { roboto, sora };
