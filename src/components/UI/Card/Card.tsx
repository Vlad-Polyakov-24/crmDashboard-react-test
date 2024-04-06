import styles from './card.module.scss';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const Card = (props: CardProps) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    );
};

export default Card;
