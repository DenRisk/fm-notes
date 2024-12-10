import './mobile-content.css';
import MobileAddNoteButton from '../mobile-add-note-btn/mobile-add-note-btn.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'
import NoteList from '../../../../components/note-list/note-list.tsx'
import MobileNoteDetails from '../mobile-note-details/mobile-note-details.tsx'
import MobileTagList from '../mobile-tag-list/mobile-tag-list.tsx'
import MobileSettings from '../mobile-settings/mobile-settings.tsx'

export default function MobileContent() {
    const {isCreating, view} = useNotes();
    return (
        <section className="mobile-content">
            {view === 'LIST' && <NoteList mobile={true}/>}
            {view === 'DETAILS' && <MobileNoteDetails/>}
            {view === 'TAGS' && <MobileTagList/>}
            {view === 'SETTINGS' && <MobileSettings/>}

            {
                !isCreating && view !== 'SETTINGS' && <MobileAddNoteButton/>
            }
        </section>
    );
}
