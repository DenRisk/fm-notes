import './note-preview.css';
import Tag from '../tag/tag.tsx'
import {Note} from '../../types/note.ts'

type NotePreviewProps = {
    note: Note,
    isActive: boolean,
    onClick : () => void
}

export default function NotePreview({note, isActive, onClick }: NotePreviewProps) {
    return (
        <button className={`note-list-item ${isActive ? 'note-list-item--active' : ''}`} onClick={onClick}>
            <h2 className='note-list-item__heading text-3'>{note.title}</h2>
            <div className='note-list-item__tag-list'>
                {note.tags.map(tag => (
                    <Tag key={tag} tag={tag}/>
                ))}
            </div>
            <p className='text-6'>{note.lastEdited}</p>
        </button>
    )
}