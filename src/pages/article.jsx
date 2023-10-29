import Image from "next/image";
import styles from ".././styles/Article.module.scss";
import Cardpost from "../components/Cardpost/Cardpost";

const Article = () => {
  return (
    <article className={styles.articles}>
      <h1>articles</h1>
      <Cardpost />
      <Cardpost />
      <Cardpost />
      <Cardpost />
    </article>
  );
};

export default Article;
