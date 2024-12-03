import './mobile-note-details.css'
import MobileDetailsControls from '../../../mobile/components/mobile-details-controls/mobile-details-controls.tsx'
import Textarea from '../../../../components/textarea/textarea.tsx'
import DetailsMetaFields from '../../../../components/details-meta-fields/details-meta-fields.tsx'
import {useNotes} from '../../../../context/NotesContext.tsx'

export default function MobileNoteDetails() {
    const {activeNote} = useNotes()

    return (
        <>
            {
                activeNote &&
                <div className='mobile-note-details'>
                    <MobileDetailsControls/>
                    <h1 className='text-1'>{activeNote.title}</h1>
                    <DetailsMetaFields tags={activeNote.tags} lastEdited={activeNote.lastEdited}/>
                    <div className='mobile-note-details__text-area'>
                        <Textarea content={activeNote.content}/>
                    </div>
                </div>
            }
        </>
    )
}