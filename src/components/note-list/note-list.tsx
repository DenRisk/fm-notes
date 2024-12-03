import NoteListItem from '../note-list-item/note-list-item.tsx'
import './note-list.css';
import CustomButton from '../custom-button/custom-button.tsx'
import Icon from '../icon/icon.tsx'
import {useNotes} from '../../context/NotesContext.tsx'
import {Note} from '../../types/note.ts'

export default function NoteList({mobile}: {mobile: boolean}) {
    const { notes, dispatch, activeNote } = useNotes();

    function handleNoteClick(note: Note) {
        dispatch({ type: 'SET_ACTIVE_NOTE', payload: note });
    }

    return (
        <div className='note-list'>
            {mobile && <h1 className='note-list__heading text-1'>Mobile Note List</h1>}
            {!mobile &&
                <div className='note-list__btn-container'>
                    <CustomButton fullWidth={true} type='default-primary' onClick={() => console.log('Clicked')}>
                        <Icon id='plus' size={14}/>
                        <span>Create New Note</span>
                    </CustomButton>
                </div>
            }
            <p className='note-list__text text-5'>All your archived notes are stored here. You can restore or delete them anytime.</p>
            <div className='note-list__items'>
                {notes.map(note => (
                    <NoteListItem
                        key={note.id}
                        note={note}
                        isActive={note.id === activeNote?.id}
                        onClick={() => handleNoteClick(note)}
                    />
                ))}
            </div>
        </div>
    )
}