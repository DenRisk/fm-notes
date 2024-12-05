import {Note} from '../types/note.ts'
import {FilterType, NotesState} from './NotesProvider.tsx'

export type NotesAction =
    | { type: 'ADD_NOTE'; payload: Note }
    | { type: 'DELETE_NOTE'; payload: string }
    | { type: 'UPDATE_NOTE'; payload: Note }
    | { type: 'SET_ACTIVE_NOTE'; payload: Note | null }
    | { type: 'SET_FILTER'; payload: { type: FilterType; tag?: string, searchTerm?: string } }
    | { type: 'TOGGLE_CREATE_MODE'; payload: boolean }
    | { type: 'TOGGLE_DETAILS_VIEW'; payload: boolean }
    | { type: 'UPDATE_NOTE_STATE'; payload: { title?: string, tags?: string, content?: string } }


export const notesReducer = (state: NotesState, action: NotesAction): NotesState => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                initialNotes: [...state.initialNotes, action.payload],
                activeNote: action.payload,
                currentNoteState: {
                    title: action.payload.title,
                    tags: action.payload.tags.join(','),
                    content: action.payload.content
                },
                isCreating: false
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                initialNotes: state.initialNotes.filter(note => note.id !== action.payload),
                activeNote: state.activeNote?.id === action.payload ? null : state.activeNote,
            };
        case 'UPDATE_NOTE':
            return {
                ...state,
                activeNote: action.payload,
                initialNotes: state.initialNotes.map(note =>
                    note.id === action.payload.id ? action.payload : note
                ),
            };
        case 'SET_ACTIVE_NOTE':
            return {
                ...state,
                activeNote: action.payload,
                isCreating: false,
                isDetailsView: true,
                currentNoteState: {
                    title: action.payload?.title ?? '',
                    tags: action.payload?.tags.join(',') ?? '',
                    content: action.payload?.content ?? ''
                }
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        case 'TOGGLE_CREATE_MODE':
            return {
                ...state,
                isCreating: action.payload,
                activeNote: action.payload ? null : state.activeNote,
                currentNoteState: action.payload ? {
                    title: '',
                    tags: '',
                    content: ''
                } : {
                    title: state.activeNote?.title ?? '',
                    tags: state.activeNote?.tags.join(',') ?? '',
                    content: state.activeNote?.content ?? ''
                }
            };
        case 'TOGGLE_DETAILS_VIEW':
            return {
                ...state,
                isDetailsView: action.payload
            };
        case 'UPDATE_NOTE_STATE':
            return {
                ...state,
                currentNoteState: {
                    ...state.currentNoteState,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};
