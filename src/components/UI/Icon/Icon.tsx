import styles from './icon.module.scss';
import sprites from '../../../assets/images/icons/sprites.svg';
import '../../../assets/styles/utils/offsets.scss';

interface Props {
    size: '16' | '24';
    icon: string;
    className?: string;
}

const Icon = (props: Props) => {
    const classes = props.className ? `${styles.icon} ${styles[`icon--${props.size}`]} ${props.className}` : `${styles.icon} ${styles[`icon--${props.size}`]}`

    return (
        <span className={classes}>
            <svg><use href={`${sprites}#${props.icon}`}/></svg>
        </span>
    );
};

export default Icon;
