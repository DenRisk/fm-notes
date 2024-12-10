import { useState } from 'react'
import './mobile-settings.css'
import SettingsSelection from '../../../../components/settings-selection/settings-selection.tsx'
import SettingDetails from '../../../../components/setting-details/setting-details.tsx'

export type SettingView = 'selection' | 'details'

export default function MobileSettings() {
    const [settingView, setSettingView] = useState<SettingView>('selection')

    const changeView = (view: SettingView) => {
        setSettingView(view)
    }

    return (
        <section className='mobile-settings'>
            {settingView === 'selection' && <h1 className='mobile-settings__heading text-1'>Settings</h1>}
            {settingView === 'selection' &&  <SettingsSelection changeView={changeView}/>}
            {settingView === 'details' && <SettingDetails changeView={changeView}/>}
        </section>
    )
}