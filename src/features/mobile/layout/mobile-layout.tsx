import {useState} from "react";

/* Styles */
import './mobile-layout.css'
/* Components */
import NoteDetails from '../../../components/note-details/note-details.tsx'
import NoteList from "../../../components/note-list/note-list.tsx";
import MobileNavigation from '../components/mobile-navigation/mobile-navigation.tsx'
import MobileHeader from '../components/mobile-header/mobile-header.tsx'
import MobileContent from '../components/mobile-content/mobile-content.tsx'

export default function MobileLayout() {
    const [view] = useState("list");

    return (
        <div className="mobile-layout">
            <MobileHeader/>
            <MobileContent>
                {view === "list" && <NoteList mobile={true}/>}
                {view === "details" && <NoteDetails/>}
            </MobileContent>
            <MobileNavigation/>
        </div>
    );
}