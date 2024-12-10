import './mobile-add-note-btn.css';
import Icon from '../../../../components/icon/icon.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'


export default function MobileAddNoteButton() {
    const {dispatch} = useNotes();

    const createNewNote = () => {
        dispatch({type: 'TOGGLE_VIEW', payload: 'DETAILS'});
        dispatch({type: 'TOGGLE_CREATE_MODE', payload: true});
    }

    return (
        <button className='mobile-add-note-btn' onClick={createNewNote}>
            <Icon id={'plus'} size={32} />
        </button>
    )
}