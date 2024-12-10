import {ColorThemes, FontThemes, Settings, SettingsState} from './settingsProvider.tsx'

export type SettingsActions =
    | { type: 'SET_COLOR_THEME'; payload: ColorThemes }
    | { type: 'SET_FONT_THEME'; payload: FontThemes }
    | { type: 'SET_ACTIVE_SETTING'; payload: Settings };


export const settingsReducer = (state: SettingsState, action: SettingsActions): SettingsState => {
    switch (action.type) {
        case 'SET_COLOR_THEME':
            return {
                ...state,
                color: action.payload,
            }
        case 'SET_FONT_THEME':
            return {
                ...state,
                font: action.payload,
            }
        case 'SET_ACTIVE_SETTING':
            return {
                ...state,
                active: action.payload,
            }
        default:
            return state;
    }
};
