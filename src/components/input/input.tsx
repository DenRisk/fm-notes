import './input.css';

type InputProps = {
    type: string,
    placeholder: string,
    classes: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({type, placeholder, classes, onChange}: InputProps) {
    return (
        <input
            type={type}
            className={`custom-input ${classes}`}
            placeholder={placeholder}
            onChange={onChange}>
        </input>
    )
}