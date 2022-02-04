import styles from './moves.module.css';

export const Moves = ({ moves }) => <ol className={styles.moves}>{moves}</ol>;
