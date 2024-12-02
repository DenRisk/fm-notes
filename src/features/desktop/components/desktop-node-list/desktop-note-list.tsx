import './desktop-note-list.css'
import NoteList from '../../../../components/note-list/note-list.tsx'

export default function DesktopNoteList() {
    return (
        <section className='desktop-note-list'>
            <NoteList mobile={false}/>
        </section>
    )
}