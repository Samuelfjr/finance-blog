import { roboto, sora } from "@/styles/fonts";
import Image from "next/image";
// import styles from "../../styles/Post.module.scss";
import styles from "../../../styles/Post.module.scss";

import { gql } from "@apollo/client";

const GET_POST = gql`
  query GetPost($slugPost: String) {
    post(where: { slug: $slugPost }) {
      id
      title
      content {
        json
      }
      author {
        name
      }
      createdAt
      coverImage {
        url
      }
    }
  }
`;

interface PostProps {
  post: {
    id: String,
    title: string,
    coverImage: {
      url: string,
    }
    author: {
      name: string,
    }
    createdAt: string,
    content: {
      json: []
    }
  }
}

const Post = () => {
  return (
    <section className={styles.post}>
      <div className={styles.heading}>
        <h1>Título do artigo</h1>
        <p>subtitulo do artigo</p>
        <div className={styles.containerAuthor}>{/* <Author /> */}</div>
      </div>
      <article className={styles.content}>
        <div className={styles.image}></div>
        conteúdo do artigo
      </article>
    </section>
  );
};

export default Post;
