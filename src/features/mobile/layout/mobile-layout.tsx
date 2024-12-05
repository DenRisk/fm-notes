/* Styles */
import './mobile-layout.css'
/* Components */
import NoteList from "../../../components/note-list/note-list.tsx";
import MobileNavigation from '../components/mobile-navigation/mobile-navigation.tsx'
import MobileLogoSection from '../components/mobile-logo-section/mobile-logo-section.tsx'
import MobileContent from '../components/mobile-content/mobile-content.tsx'
import MobileNoteDetails from '../components/mobile-note-details/mobile-note-details.tsx'
import {useNotes} from '../../../context/NotesContext.tsx'

export default function MobileLayout() {
    const {isDetailsView} = useNotes()

    return (
        <div className="mobile-layout">
            <MobileLogoSection/>
            <MobileContent>
                {!isDetailsView && <NoteList mobile={true}/>}
                {isDetailsView && <MobileNoteDetails/>}
            </MobileContent>
            <MobileNavigation/>
        </div>
    );
}