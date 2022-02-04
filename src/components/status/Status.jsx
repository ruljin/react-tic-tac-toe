import styles from './status.module.css';

export const Status = ({ status }) => (
	<div className={styles.status}>{status}</div>
);
