import './note-edit.css';
import DetailsMetaFields from '../details-meta-fields/details-meta-fields.tsx'
import Textarea from '../textarea/textarea.tsx'
import {useNoteActions} from '../../hooks/useNoteActions.tsx'

export default function NoteEdit() {
    const {activeNote, handleTextareaChange, currentNoteState} = useNoteActions();
    const noteContent = currentNoteState.content;

    return (
        <>
            <h1 className='text-1'>{activeNote?.title ?? ''}</h1>
            <DetailsMetaFields
                isCreating={false}
                tags={activeNote?.tags}
                lastEdited={activeNote?.lastEdited ?? ''}
                isArchived={activeNote?.isArchived}
            />
            <div className='desktop-note-details__text-area'>
                <Textarea content={noteContent} onChange={handleTextareaChange}/>
            </div>
        </>
    )
}