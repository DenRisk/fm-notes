import './desktop-note-details.css'
import DesktopDetailsControls from '../desktop-details-controls/desktop-details-controls.tsx'
import NoteCreate from '../../../../components/note-create/note-create.tsx'
import NoteEdit from '../../../../components/note-edit/note-edit.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'
import SettingDetails from '../../../../components/setting-details/setting-details.tsx'

export default function DesktopNoteDetails() {
    const {activeNote, isCreating, view} = useNotes();

    return (
        <section className='desktop-note-details'>
            <form className='desktop-note-details__form'>
                {!activeNote && isCreating && view !== 'SETTINGS' && <NoteCreate/>}
                {activeNote && !isCreating && view !== 'SETTINGS' && <NoteEdit/>}
                {(activeNote || isCreating) && view !== 'SETTINGS' && <DesktopDetailsControls/>}
                { view === 'SETTINGS' && <SettingDetails></SettingDetails>}
            </form>
        </section>
    )
}