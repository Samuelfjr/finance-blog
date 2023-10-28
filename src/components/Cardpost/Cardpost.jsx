import styles from "../Cardpost/Cardpost.module.scss";
import Author from "../ui/Author/Author";

const Cardpost = () => {
  return (
    <div className={styles.post}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h2>Título do post</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi
          quas et at optio ea voluptates cumque.
        </p>
        <div className={styles.footer}>
          <Author />
          <Link href={`/post/nome-do-post`}>Continuar lendo...</Link>
        </div>
      </div>
    </div>
  );
};

export default Cardpost;
