import {useState} from "react";

/* Styles */
import './mobile-layout.css'
/* Components */
import NoteList from "../../../components/note-list/note-list.tsx";
import MobileNavigation from '../components/mobile-navigation/mobile-navigation.tsx'
import MobileHeader from '../components/mobile-header/mobile-header.tsx'
import MobileContent from '../components/mobile-content/mobile-content.tsx'
import MobileNoteDetails from '../components/mobile-note-details/mobile-note-details.tsx'

export default function MobileLayout() {
    const [view] = useState("details");

    return (
        <div className="mobile-layout">
            <MobileHeader/>
            <MobileContent>
                {view === "list" && <NoteList mobile={true}/>}
                {view === "details" && <MobileNoteDetails/>}
            </MobileContent>
            <MobileNavigation/>
        </div>
    );
}