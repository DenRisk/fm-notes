import {useNotes} from '../context/notes/NotesContext.tsx'
import {Note} from '../types/note.ts'
import {v4 as uuidv4} from 'uuid';
import {ContentView} from '../context/notes/NotesProvider.tsx'
import {useDialogActions} from './useDialogActions.tsx'


export function useNoteActions() {
    const {activeNote, isCreating, dispatch, currentNoteState} = useNotes();
    const {addToast} = useDialogActions()
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
                title: title ? title : 'Untitled Note',
                tags: tags ? tags.split(',') : [],
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

        // Add Toast for saving Note
        addToast('save-note')
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
            dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'});

            // Add Toast for deleting Note
            addToast('delete-note')
        }
    }

    const handleArchiveNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (activeNote) {
            dispatch({type: 'UPDATE_NOTE', payload: {...activeNote, isArchived: true}})
            dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'});
            dispatch({type: 'SET_FILTER', payload: {type: 'ARCHIVED'}});

            // Add Toast for archiving Note
            addToast('archive-note')
        }
    }

    const handleRestoreNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (activeNote) {
            dispatch({type: 'UPDATE_NOTE', payload: {...activeNote, isArchived: false}})
            dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'});
            dispatch({type: 'SET_FILTER', payload: {type: 'ALL'}});

            // Add Toast for archiving Note
            addToast('restore-note')
        }
    }

    const handleViewChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, view: ContentView, resetCreatingState?: boolean) => {
        e.preventDefault();
        dispatch({type: 'TOGGLE_VIEW', payload: view});

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
        handleViewChange,
        handleRestoreNote
    };
}
