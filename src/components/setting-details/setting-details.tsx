import './setting-details.css'
import {useSettingsActions} from '../../hooks/useSettingsActions.tsx'
import ColorSelection from '../color-selection/color-selection.tsx'
import FontSelection from '../font-selection/font-selection.tsx'
import {SettingView} from '../../features/mobile/components/mobile-settings/mobile-settings.tsx'
import CustomButton from '../custom-button/custom-button.tsx'
import Icon from '../icon/icon.tsx'

type SettingProps = {
    changeView?: (view: SettingView) => void
}

export default function SettingDetails({changeView}: SettingProps) {
    const {active} = useSettingsActions()

    const goBackToSettingSelection = (view: SettingView) => {
        if (changeView) {
            changeView(view)
        }
    }

    return (
        <div className='setting-selection'>
            {changeView && (
                <div className='setting-selection__nav'>
                    <CustomButton
                        fullWidth={false}
                        type={'transparent-primary'}
                        onClick={() => goBackToSettingSelection('selection')}
                    >
                        <Icon id='chevronLeft' size={20} clickable={true}/>
                        <span className='text-4'>Settings</span>
                    </CustomButton>
                </div>
            )
            }
            {active === 'Color-Theme' && <ColorSelection/>}
            {active === 'Font-Theme' && <FontSelection/>}
        </div>
    )
}