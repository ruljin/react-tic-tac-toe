import styles from "./square.module.scss";

export const Square = ({ value, onClick }) => (
	<button className={styles.square} onClick={onClick}>
		{value}
	</button>
);
