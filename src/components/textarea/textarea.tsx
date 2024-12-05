import React from "react";
import './textarea.css';

type TextareaProps = {
    content?: string;
    onChange: (value: string) => void;
};

export default function Textarea({content = "", onChange}: TextareaProps) {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    return (
        <textarea
            className="custom-textarea"
            value={content}
            onChange={handleChange}
        />
    );
}
