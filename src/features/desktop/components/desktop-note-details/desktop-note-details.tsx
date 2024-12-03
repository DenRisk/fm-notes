import './desktop-note-details.css'
import Textarea from '../../../../components/textarea/textarea.tsx'
import DesktopDetailsControls from '../desktop-details-controls/desktop-details-controls.tsx'
import DetailsMetaFields from '../../../../components/details-meta-fields/details-meta-fields.tsx'
import {useNotes} from '../../../../context/NotesContext.tsx'

export default function DesktopNoteDetails() {
    const {activeNote} = useNotes()

    return (
        <section className='desktop-note-details'>
            {activeNote &&
                <div className='desktop-note-details__content'>
                    <h1 className='text-1'>{activeNote.title}</h1>
                    <DetailsMetaFields tags={activeNote.tags} lastEdited={activeNote.lastEdited}/>
                    <div className='desktop-note-details__text-area'>
                        <Textarea content={activeNote.content}/>
                    </div>
                    <DesktopDetailsControls/>
                </div>
            }
        </section>
    )
}