import {createContext, useContext} from 'react';
import {DialogState} from './DialogProvider.tsx'
import {DialogAction} from './dialogReducer.ts'


type DialogContextType = DialogState & {
    dispatch: React.Dispatch<DialogAction>;
};

export const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialog = () => {
    const context = useContext(DialogContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }
    return context;
};
