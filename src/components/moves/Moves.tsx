import { ReactNode } from "react";
import styles from "./moves.module.scss";

type MovesProps = {
	moves: ReactNode[];
};

export const Moves = ({ moves }: MovesProps) => (
	<ol className={styles.moves}>{moves}</ol>
);
