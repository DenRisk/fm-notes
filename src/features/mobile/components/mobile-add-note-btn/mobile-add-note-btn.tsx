import './mobile-add-note-btn.css';
import Icon from '../../../../components/icon/icon.tsx'
import {useNotes} from '../../../../context/NotesContext.tsx'


export default function MobileAddNoteButton() {
    const {dispatch} = useNotes();

    const createNewNote = () => {
        dispatch({type: 'TOGGLE_DETAILS_VIEW', payload: true});
        dispatch({type: 'TOGGLE_CREATE_MODE', payload: true});
    }

    return (
        <button className='mobile-add-note-btn' onClick={createNewNote}>
            <Icon id={'plus'} size={32} />
        </button>
    )
}