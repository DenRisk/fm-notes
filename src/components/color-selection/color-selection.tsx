import './color-selection.css'
import SettingCheckbox from '../setting-checkbox/setting-checkbox.tsx'
import {useState} from 'react'
import {ColorThemes} from '../../context/settings/settingsProvider.tsx'
import CustomButton from '../custom-button/custom-button.tsx'
import {useSettingsActions} from '../../hooks/useSettingsActions.tsx'
import { useMediaQuery } from 'react-responsive'

export default function ColorSelection() {
    const {setColorTheme, color} = useSettingsActions()
    const [mode, setMode] = useState<ColorThemes>(color)
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1200px)'})


    const selectMode = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ,theme: ColorThemes) => {
        event.preventDefault()
        setMode(theme)
    }

    const applyChanges = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setColorTheme(mode)
    }

    return (
        <div className='color-selection'>
            <h3 className={`color-selection__heading ${isTabletOrMobile ? 'text-1' : 'text-3'}`}>Color Theme</h3>
            <p className='color-selection__paragraph text-5'>Choose your color theme:</p>
            <div className='color-selection__checkboxes'>
                <SettingCheckbox
                    iconId='sun'
                    title='Light Mode'
                    paragraph='Pick a clean and classic light theme'
                    selectMode={(e) => selectMode(e, 'Light')}
                    selected={mode === 'Light'}
                />
                <SettingCheckbox
                    iconId='moon'
                    title='Dark Mode'
                    paragraph='Select a sleek and modern dark theme'
                    selectMode={(e) => selectMode(e, 'Dark')}
                    selected={mode === 'Dark'}
                />
                <SettingCheckbox
                    iconId='system'
                    title='System'
                    paragraph='Adapts to your device’s theme'
                    selectMode={(e) => selectMode(e, 'System')}
                    selected={mode === 'System'}
                />
            </div>
            <div className='color-selection__btn-container'>
                <CustomButton fullWidth={false} type={'default-primary'} onClick={(e) => applyChanges(e)}>
                    Apply Changes
                </CustomButton>
            </div>
        </div>
    )
}