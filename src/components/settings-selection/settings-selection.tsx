import './settings-selection.css'
import NavigationItem from '../navigation-item/navigation-item.tsx'
import {useSettingsActions} from '../../hooks/useSettingsActions.tsx'
import {SettingView} from '../../features/mobile/components/mobile-settings/mobile-settings.tsx'

type SettingProps = {
    changeView?: (view: SettingView) => void
}

export default function SettingsSelection({changeView}: SettingProps) {
    const {active, setActiveSetting} = useSettingsActions()

    const setColorSettingsActive = () => {

        if (changeView) {
            changeView('details')
        }

        setActiveSetting('Color-Theme')
    }

    const setFontSettingActive = () => {
        if (changeView) {
            changeView('details')
        }

        setActiveSetting('Font-Theme')
    }

    return (
        <div className='settings-selection'>
            <NavigationItem iconId='sun' label='Color Theme' onClick={setColorSettingsActive}
                            selected={active === 'Color-Theme'}/>
            <NavigationItem iconId='font' label='Font Theme' onClick={setFontSettingActive}
                            selected={active === 'Font-Theme'}/>
        </div>
    )
}