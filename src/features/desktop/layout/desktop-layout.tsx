/* Styles */
import './desktop-layout.css'

/* Components */
import DesktopSidebar from '../components/desktop-sidebar/desktop-sidebar.tsx'
import DesktopNoteActions from '../components/desktop-note-actions/desktop-note-actions.tsx'
import DesktopHeader from '../components/desktop-header/desktop-header.tsx'
import DesktopNoteList from '../components/desktop-node-list/desktop-note-list.tsx'
import DesktopNoteDetails from '../components/desktop-note-details/desktop-note-details.tsx'

export default function DesktopLayout() {
    return (
        <div className="desktop-layout">
            <DesktopSidebar/>
            <DesktopHeader/>
            <DesktopNoteList/>
            <DesktopNoteDetails/>
            <DesktopNoteActions/>
        </div>
    );
}