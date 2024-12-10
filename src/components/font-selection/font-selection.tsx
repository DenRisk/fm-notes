import './font-selection.css'
import SettingCheckbox from '../setting-checkbox/setting-checkbox.tsx'
import {useState} from 'react'
import {FontThemes} from '../../context/settings/settingsProvider.tsx'
import CustomButton from '../custom-button/custom-button.tsx'
import {useSettingsActions} from '../../hooks/useSettingsActions.tsx'
import {useMediaQuery} from 'react-responsive'

export default function ColorSelection() {
    const {setFontTheme, font} = useSettingsActions()
    const [mode, setMode] = useState<FontThemes>(font)
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1200px)'})


    const selectMode = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, theme: FontThemes) => {
        event.preventDefault()
        setMode(theme)
    }

    const applyChanges = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setFontTheme(mode)
    }

    return (
        <div className='font-selection'>
            <h3 className={`color-selection__heading ${isTabletOrMobile ? 'text-1' : 'text-3'}`}>Font Theme</h3>
            <p className='font-selection__paragraph text-5'>Choose your font theme:</p>
            <div className='font-selection__checkboxes'>
                <SettingCheckbox
                    iconId='fontSansSerif'
                    title='Sans-serif'
                    paragraph='Clean and modern, easy to read.'
                    selectMode={(e) => selectMode(e, 'Inter')}
                    selected={mode === 'Inter'}
                />
                <SettingCheckbox
                    iconId='fontSerif'
                    title='Serif'
                    paragraph='Classic and elegant for a timeless feel.'
                    selectMode={(e) => selectMode(e, 'Noto Serif')}
                    selected={mode === 'Noto Serif'}
                />
                <SettingCheckbox
                    iconId='fontMonoSpace'
                    title='Monospace'
                    paragraph='Code-like, great for a technical vibe.'
                    selectMode={(e) => selectMode(e, 'Source Code Pro')}
                    selected={mode === 'Source Code Pro'}
                />
            </div>
            <div className='font-selection__btn-container'>
                <CustomButton fullWidth={false} type={'default-primary'} onClick={(e) => applyChanges(e)}>
                    Apply Changes
                </CustomButton>
            </div>
        </div>
    )
}