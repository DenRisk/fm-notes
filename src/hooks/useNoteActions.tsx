import {useNotes} from '../context/NotesContext.tsx'
import {Note} from '../types/note.ts'
import {v4 as uuidv4} from 'uuid';


export function useNoteActions() {
    const {activeNote, isCreating, dispatch, currentNoteState} = useNotes();
    const {title, tags, content: noteContent} = currentNoteState;

    const handleTextareaChange = (newValue: string) => {
        dispatch({type: 'UPDATE_NOTE_STATE', payload: {content: newValue}});
    };

    const handleTitleChange = (newValue: string) => {
        dispatch({type: 'UPDATE_NOTE_STATE', payload: {title: newValue}});
    };

    const handleTagsChange = (newValue: string) => {
        dispatch({type: 'UPDATE_NOTE_STATE', payload: {tags: newValue}});
    };

    const handleSaveNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (isCreating) {
            const newNote: Note = {
                id: uuidv4(),
                title,
                tags: tags.split(','),
                content: noteContent,
                lastEdited: new Date().toISOString(),
                isArchived: false,
            };

            dispatch({type: 'ADD_NOTE', payload: newNote});
        } else {
            if (!activeNote) return;

            const updatedNote: Note = {
                ...activeNote,
                content: noteContent,
                lastEdited: new Date().toISOString(),
            };

            dispatch({type: 'UPDATE_NOTE', payload: updatedNote});
        }
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (activeNote) {
            dispatch({
                type: 'UPDATE_NOTE_STATE',
                payload: {
                    content: activeNote.content,
                    title: activeNote.title,
                    tags: activeNote.tags.join(','),
                },
            });
        } else {
            dispatch({
                type: 'UPDATE_NOTE_STATE',
                payload: {
                    content: '',
                    title: '',
                    tags: '',
                },
            });
        }
    };

    const handleDeleteNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (activeNote) {
            dispatch({type: 'DELETE_NOTE', payload: activeNote.id})
        }
    }

    const handleArchiveNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (activeNote) {
            dispatch({type: 'UPDATE_NOTE', payload: {...activeNote, isArchived: true}})
        }
    }

    const handleDetailsViewChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, showDetails: boolean, resetCreatingState?: boolean) => {
        e.preventDefault();
        dispatch({type: 'TOGGLE_DETAILS_VIEW', payload: showDetails});

        if (resetCreatingState) {
            dispatch({type: 'TOGGLE_CREATE_MODE', payload: false});
        }
    }

    return {
        activeNote,
        isCreating,
        currentNoteState,
        handleTextareaChange,
        handleTitleChange,
        handleTagsChange,
        handleSaveNote,
        handleCancel,
        handleDeleteNote,
        handleArchiveNote,
        handleDetailsViewChange
    };
}
