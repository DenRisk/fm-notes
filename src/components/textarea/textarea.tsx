import './textarea.css'

type TextareaProps = {
    content: string
}

export default function Textarea({content}: TextareaProps) {
    return (
        <textarea className="custom-textarea" defaultValue={content} value={content}/>
    )
}