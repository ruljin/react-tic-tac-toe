import styles from './square.module.css';

export const Square = ({ value, onClick }) => (
	<button className={styles.square} onClick={onClick}>
		{value}
	</button>
);
