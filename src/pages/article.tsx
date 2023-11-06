import Image from "next/image";
import styles from ".././styles/Article.module.scss";
import CardPost from "../components/CardPost/CardPost";
import { useQuery, gql } from "@apollo/client";

export default function Article() {
  const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        title
        subtitle
        createdAt
        category
        featuredPost
        coverImage {
          url
        }
        author {
          name
        }
      }
    }
  `;

  interface AllPosts {
    posts: {
      id: string;
      slug: string;
      title: string;
      subtitle: string;
      createdAt: string;
      category: string;
      featuredPost: boolean;
      coverImage: {
        url: string;
      };
      author: {
        name: string;
      };
    }[];
  }

  const { loading, data, error } = useQuery<AllPosts>(GET_ALL_POSTS);
  console.log(data?.posts);
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
}
