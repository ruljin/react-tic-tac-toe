import styles from "./moves.module.scss";

export const Moves = ({ moves }) => <ol className={styles.moves}>{moves}</ol>;
