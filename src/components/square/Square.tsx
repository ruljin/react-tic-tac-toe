import styles from "./square.module.scss";

type SquareProps = {
	value: number;
	onClick: () => void;
};

export const Square = ({ value, onClick }: SquareProps) => (
	<button className={styles.square} onClick={onClick}>
		{value}
	</button>
);
