import {createContext, useContext} from 'react';
import {NotesAction} from './notesReducer.ts'
import {NotesState} from './NotesProvider.tsx'

type NotesContextType = NotesState & {
    dispatch: React.Dispatch<NotesAction>;
};

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const useNotes = () => {
    const context = useContext(NotesContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }
    return context;
};
