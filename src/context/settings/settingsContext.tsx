import {createContext, useContext} from 'react';
import {SettingsActions} from './settingsReducer.ts'
import {SettingsState} from './settingsProvider.tsx'

type SettingsContextType = SettingsState & {
    dispatch: React.Dispatch<SettingsActions>;
};

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }
    return context;
};
