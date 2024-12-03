import './custom-button.css';

type ButtonProps = {
    children: React.ReactNode;
    fullWidth: boolean;
    type?: "default-primary" | "default-secondary" | "transparent-primary"| "transparent-secondary" | 'icon';
    onClick?: () => void
}

export default function CustomButton({children, type = 'default-primary', fullWidth = false, onClick}: ButtonProps) {
    return (
        <button className={`custom-button custom-button--${type} ${fullWidth ? 'custom-button--full-width' : ''}`} onClick={() => onClick}>
            {children}
        </button>
    )
}