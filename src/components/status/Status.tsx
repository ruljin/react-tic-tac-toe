import styles from "./status.module.scss";

type StatusProps = {
	status: string;
};

export const Status = ({ status }: StatusProps) => (
	<div className={styles.status}>{status}</div>
);
