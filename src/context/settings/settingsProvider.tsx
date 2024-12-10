import {ReactNode, useEffect, useReducer} from 'react';
import {SettingsContext} from './settingsContext.tsx';
import {settingsReducer} from './settingsReducer.ts'

export type Settings = 'Color-Theme' | 'Font-Theme';
export type ColorThemes = 'Dark' | 'Light' | 'System';
export type FontThemes = 'Inter' | 'Noto Serif' | 'Source Code Pro';

export type SettingsState = {
    font: FontThemes,
    color: ColorThemes
    active: Settings
}

const settingsState: SettingsState = {
    active: 'Color-Theme',
    font: 'Inter',
    color: 'Light'
}

export const SettingsProvider = ({children}: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(settingsReducer, settingsState);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.className = state.color === 'System' ? (systemPrefersDark ? 'dark' : 'light') : state.color.toLowerCase();
    }, [state.color]);

    useEffect(() => {
        const body = document.body;
        body.style.fontFamily = state.font;
    }, [state.font]);

    return (
        <SettingsContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </SettingsContext.Provider>
    );
};
