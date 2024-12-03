import {Note} from '../types/note.ts'
import {NotesState} from './NotesProvider.tsx'

export type NotesAction =
    | { type: 'ADD_NOTE'; payload: Note }
    | { type: 'DELETE_NOTE'; payload: string }
    | { type: 'UPDATE_NOTE'; payload: Note }
    | { type: 'SET_ACTIVE_NOTE'; payload: Note | null }

export const notesReducer = (state: NotesState, action: NotesAction): NotesState => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {...state, notes: [...state.notes, action.payload]};
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                activeNote: state.activeNote?.id === action.payload ? null : state.activeNote,
            };
        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id ? action.payload : note
                ),
            };
        case 'SET_ACTIVE_NOTE':
            return {...state, activeNote: action.payload};
        default:
            return state;
    }
};
