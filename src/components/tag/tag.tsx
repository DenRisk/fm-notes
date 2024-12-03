import './tag.css';

type TagProps = {
    tag: string
}

export default function Tag({tag}: TagProps) {
    return (
        <div className='tag text-6'>
            {tag}
        </div>
    )
}