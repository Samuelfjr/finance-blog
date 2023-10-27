import { roboto, sora } from "@/styles/fonts";
import Image from "next/image";
import Author from "../../components/ui/Author/Author";
import styles from "../../styles/Post.module.scss";

const Post = () => {
  return (
    <section className={styles.post}>
      <div className={styles.heading}>
        <h1>Título do artigo</h1>
        <p>subtitulo do artigo</p>
        <Author />
      </div>
      <article className={styles.content}>
        <div className={styles.image}></div>
        conteúdo do artigo
      </article>
    </section>
  );
};

export default Post;
