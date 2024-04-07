import styles from './status.module.scss';

interface IStatusProps {
    status: boolean;
}

const Status = (props: IStatusProps) => {
    const status: 'active' | 'inactive' = props.status ? 'active' : 'inactive';

    return (
        <span className={`${styles.status} ${styles[`status--${status}`]}`}>{status}</span>
    );
};

export default Status;
