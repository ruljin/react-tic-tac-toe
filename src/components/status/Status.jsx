import styles from "./status.module.scss";

export const Status = ({ status }) => (
	<div className={styles.status}>{status}</div>
);
