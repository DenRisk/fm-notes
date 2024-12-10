import NotePreview from '../note-preview/note-preview.tsx'
import './note-list.css';
import CustomButton from '../custom-button/custom-button.tsx'
import Icon from '../icon/icon.tsx'
import {useNotes} from '../../context/notes/NotesContext.tsx'
import {Note} from '../../types/note.ts'
import EmptyNotesText from '../empty-notes-text/empty-notes-text.tsx'
import MobileHeader from '../../features/mobile/components/mobile-header/mobile-header.tsx'

type NoteListProps = {
    mobile: boolean;
}

export default function NoteList({mobile}: NoteListProps) {
    const {filteredNotes, dispatch, activeNote, filter, isCreating, currentNoteState} = useNotes();

    const handleNoteClick = (note: Note) => {
        dispatch({type: 'SET_ACTIVE_NOTE', payload: note});
    }

    const createNewNote = () => {
        dispatch({type: 'SET_FILTER', payload: {type: 'ALL'}});
        dispatch({type: 'TOGGLE_CREATE_MODE', payload: true});
    }

    return (
        <div className='note-list'>
            {mobile && <MobileHeader/>}
            {!mobile &&
                <div className='note-list__btn-container'>
                    <CustomButton fullWidth={true} type='default-primary' onClick={() => createNewNote()}>
                        <Icon id='plus' size={14}/>
                        <span>Create New Note</span>
                    </CustomButton>
                </div>
            }

            {
                isCreating &&
                <div className='note-list__creation text-3'>{currentNoteState.title ? currentNoteState.title : 'Untitled Note'}</div>
            }

            {filter.type === 'ARCHIVED' &&
                <p className='note-list__text text-5'>All your archived notes are stored here. You can restore or delete
                    them anytime.</p>}
            {filter.type === 'TAG' &&
                <p className='note-list__text text-5'>All notes with the <span>"{filter.tag}"</span> tag are shown here.
                </p>}

            <div className='note-list__items'>
                {filteredNotes.map(note => (
                    <NotePreview
                        key={note.id}
                        note={note}
                        isActive={mobile ? false : note.id === activeNote?.id}
                        onClick={() => handleNoteClick(note)}
                    />
                ))}
            </div>

            {filter.type === 'ARCHIVED' && filteredNotes.length === 0 &&
                <EmptyNotesText>
                    No notes have been archived yet. Move notes here for safekeeping, or <u>create a new note.</u>
                </EmptyNotesText>

            }
            {filter.type === 'ALL' && filteredNotes.length === 0 &&
                <EmptyNotesText>
                    You don’t have any notes yet. Start a new note to capture your thoughts and ideas.
                </EmptyNotesText>
            }
        </div>
    )
}