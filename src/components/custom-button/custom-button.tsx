import './custom-button.css';

type ButtonProps = {
    children: React.ReactNode;
    fullWidth: boolean;
    type: "default-primary" | "default-secondary" | "transparent-primary" | "transparent-secondary" | 'icon';
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean
}

export default function CustomButton({children, type = 'default-primary', fullWidth = false, onClick, disabled}: ButtonProps) {
    return (
        <button disabled={disabled} className={`custom-button custom-button--${type} ${fullWidth ? 'custom-button--full-width' : ''}`}
                onClick={onClick}>
            {children}
        </button>
    )
}