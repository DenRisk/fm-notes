/* Styles */
import './mobile-layout.css'
/* Components */
import NoteList from "../../../components/note-list/note-list.tsx";
import MobileNavigation from '../components/mobile-navigation/mobile-navigation.tsx'
import MobileLogoSection from '../components/mobile-logo-section/mobile-logo-section.tsx'
import MobileContent from '../components/mobile-content/mobile-content.tsx'
import MobileNoteDetails from '../components/mobile-note-details/mobile-note-details.tsx'
import {useNotes} from '../../../context/NotesContext.tsx'
import MobileTagList from '../components/mobile-tag-list/mobile-tag-list.tsx'

export default function MobileLayout() {
    const {view} = useNotes()

    return (
        <div className="mobile-layout">
            <MobileLogoSection/>
            <MobileContent>
                {view === 'LIST' && <NoteList mobile={true}/>}
                {view === 'DETAILS' && <MobileNoteDetails/>}
                {view === 'TAGS' && <MobileTagList/>}
            </MobileContent>
            <MobileNavigation/>
        </div>
    );
}