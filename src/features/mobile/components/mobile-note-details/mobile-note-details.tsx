import './mobile-note-details.css'
import NoteCreate from '../../../../components/note-create/note-create.tsx'
import NoteEdit from '../../../../components/note-edit/note-edit.tsx'
import MobileDetailsControls from '../mobile-details-controls/mobile-details-controls.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'


export default function MobileNoteDetails() {
    const {
        activeNote,
        isCreating,
    } = useNotes();


    return (
        <form className='desktop-note-details__form'>
            <MobileDetailsControls/>
            {!activeNote && isCreating && <NoteCreate/>}
            {activeNote && !isCreating && <NoteEdit/>}
        </form>
    )
}