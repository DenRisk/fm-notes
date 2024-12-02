import './desktop-note-actions.css'
import DesktopNoteActionsItem from '../desktop-note-actions-item/desktop-note-actions-item.tsx'

export default function DesktopNoteActions() {
    return (
        <section className='desktop-note-actions'>
            <DesktopNoteActionsItem iconId={'archived'} label={'Archive Note'}
                                    onClick={() => console.log('Click')}/>
            <DesktopNoteActionsItem iconId={'delete'} label={'Delete Note'}
                                    onClick={() => console.log('Delete')}/>
        </section>
    )
}