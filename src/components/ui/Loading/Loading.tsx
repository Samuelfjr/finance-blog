import styles from "../Loading/Loading.module.scss";

export function Loading() {
  return (
    <div className={styles.containerLoading}>
      <h1>carregando...</h1>
    </div>
  );
}
