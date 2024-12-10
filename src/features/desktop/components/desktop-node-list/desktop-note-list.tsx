import './desktop-note-list.css'
import NoteList from '../../../../components/note-list/note-list.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'
import SettingsSelection from '../../../../components/settings-selection/settings-selection.tsx'

export default function DesktopNoteList() {
    const { view } = useNotes();
    return (
        <section className='desktop-note-list'>
            {
                view === 'SETTINGS' ? <SettingsSelection /> : <NoteList mobile={false}/>
            }
        </section>
    )
}