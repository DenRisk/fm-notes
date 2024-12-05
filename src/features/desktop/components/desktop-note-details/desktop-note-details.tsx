import './desktop-note-details.css'
import DesktopDetailsControls from '../desktop-details-controls/desktop-details-controls.tsx'
import NoteCreate from '../../../../components/note-create/note-create.tsx'
import NoteEdit from '../../../../components/note-edit/note-edit.tsx'
import {useNotes} from '../../../../context/NotesContext.tsx'

export default function DesktopNoteDetails() {
    const {activeNote, isCreating} = useNotes();

    return (
        <section className='desktop-note-details'>
            <form className='desktop-note-details__form'>
                {!activeNote && isCreating && <NoteCreate/>}
                {activeNote && !isCreating && <NoteEdit/>}
                {(activeNote || isCreating) && <DesktopDetailsControls/>}
            </form>
        </section>
    )
}