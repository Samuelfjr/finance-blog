import Image from "next/image";
import styles from ".././styles/Article.module.scss";
import CardPost from "../components/CardPost/CardPost";

const Article = () => {
  return (
    <article className={styles.articles}>
      <h1>articles</h1>
      {data?.posts.map((post, index) => {
        return (
          <CardPost
            key={post.id}
            title={post.title}
            author={post.author.name}
            createdAt={post.createdAt}
            subtitle={post.subtitle}
            urlImage={post.coverImage.url}
          />
        );
      })}
    </article>
  );
};

export default Article;
