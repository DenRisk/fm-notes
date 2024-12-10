import {useSettings} from '../context/settings/settingsContext.tsx'
import {ColorThemes, FontThemes, Settings} from '../context/settings/settingsProvider.tsx'

export function useSettingsActions() {
    const {color, font, active, dispatch} = useSettings();

    const setColorTheme = (color: ColorThemes) => {
        dispatch({type: 'SET_COLOR_THEME', payload: color});
    }

    const setFontTheme = (font: FontThemes) => {
        dispatch({type: 'SET_FONT_THEME', payload: font});
    }

    const setActiveSetting = (setting: Settings) => {
        dispatch({type: 'SET_ACTIVE_SETTING', payload: setting});
    }


    return {
        setColorTheme,
        setFontTheme,
        setActiveSetting,
        color,
        font,
        active
    }
}