import './desktop-note-actions.css'
import DesktopNoteActionsItem from '../desktop-note-actions-item/desktop-note-actions-item.tsx'
import {useDialogActions} from '../../../../hooks/useDialogActions.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'

export default function DesktopNoteActions() {
    const {activeNote, view} = useNotes()
    const {setModal} = useDialogActions()

    return (
        <section className='desktop-note-actions'>
            {
                activeNote && view !== 'SETTINGS' &&
                <>
                    <DesktopNoteActionsItem
                        iconId={'archived'}
                        label={'Archive Note'}
                        onClick={(e) => setModal(e, 'archive-note')}
                    />
                    <DesktopNoteActionsItem
                        iconId={'delete'}
                        label={'Delete Note'}
                        onClick={(e) => setModal(e, 'delete-note')}
                    />
                </>
            }
        </section>
    )
}