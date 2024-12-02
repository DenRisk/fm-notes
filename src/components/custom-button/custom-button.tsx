import './custom-button.css';

type ButtonProps = {
    children: React.ReactNode;
    fullWidth: boolean;
    type?: "primary" | "secondary";
    onClick?: () => void
}

export default function CustomButton({children, type = 'primary', fullWidth = false, onClick}: ButtonProps) {
    return (
        <button className={`custom-button custom-button--${type} ${fullWidth ? 'custom-button--full-width' : ''}`} onClick={() => onClick}>
            {children}
        </button>
    )
}