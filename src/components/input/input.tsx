import './input.css';

type InputProps = {
    type: string,
    placeholder: string,
    classes: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

export default function Input({type, placeholder, classes, onChange, value}: InputProps) {
    return (
        <input
            type={type}
            className={`custom-input ${classes}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}>
        </input>
    )
}