import classes from './NewButton.module.css'
interface NewButtonProps {
    label: string;
    size?: 'small' | 'large';
    onClick?: () => void;
}

const NewButton = ({ label, onClick, size }: NewButtonProps) => {
    return (
        <div
            className={`${classes.button} ${
                size === 'small' ?
                classes.button_small : size === 'large' ?
                    classes.button_large : ''
                }`}
            onClick={onClick}>
            <p>{label}</p>
        </div>
    )
}

export default NewButton