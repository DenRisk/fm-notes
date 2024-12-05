import './desktop-note-actions.css'
import DesktopNoteActionsItem from '../desktop-note-actions-item/desktop-note-actions-item.tsx'
import {useNoteActions} from '../../../../hooks/useNoteActions.tsx'

export default function DesktopNoteActions() {
    const { activeNote, handleArchiveNote, handleDeleteNote } = useNoteActions()

    return (
        <section className='desktop-note-actions'>
            {
                activeNote &&
                <>
                    <DesktopNoteActionsItem
                        iconId={'archived'}
                        label={'Archive Note'}
                        onClick={() => handleArchiveNote()}
                    />
                    <DesktopNoteActionsItem
                        iconId={'delete'}
                        label={'Delete Note'}
                        onClick={() => handleDeleteNote()}
                    />
                </>
            }
        </section>
    )
}