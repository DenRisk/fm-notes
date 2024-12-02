import './note-list-item.css';
import Tag from '../tag/tag.tsx'

export default function NoteListItem() {
    return (
        <div className='note-list-item'>
            <h2 className='note-list-item__heading text-3'>TypeScript Migration Guide</h2>
            <div className='note-list-item__tag-list'>
                <Tag/>
                <Tag/>
                <Tag/>
            </div>
            <p className='text-6'>26 Oct 2024</p>
        </div>
    )
}