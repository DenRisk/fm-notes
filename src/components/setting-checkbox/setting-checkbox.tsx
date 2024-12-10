import './setting-checkbox.css'
import Icon, {IconIds} from '../icon/icon.tsx'

type SettingCheckboxProps = {
    iconId: IconIds,
    title: string,
    paragraph: string,
    selected?: boolean
    selectMode: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function SettingCheckbox({iconId, title, paragraph, selected = false, selectMode}: SettingCheckboxProps) {

    return (
        <button className={`setting-checkbox ${selected ? 'setting-checkbox--selected' : ''}`} onClick={selectMode}>
            <div className='setting-checkbox__content'>
                <div className="setting-checkbox__icon-container">
                    <Icon id={iconId} size={24}/>
                </div>
                <div>
                    <h4 className='setting-checkbox__heading text-4'>{title}</h4>
                    <p className='setting-checkbox__paragraph text-6'>{paragraph}</p>
                </div>
            </div>
            <div className='setting-checkbox__toggle'>
                <div className='setting-checkbox__inner-circle'></div>
            </div>
        </button>
    )
}