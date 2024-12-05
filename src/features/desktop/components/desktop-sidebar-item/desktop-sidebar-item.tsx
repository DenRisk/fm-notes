import './desktop-sidebar-item.css'
import Icon, {IconIds} from '../../../../components/icon/icon.tsx'

type DesktopSidebarItemProps = {
    iconId: IconIds,
    label: string
    selected?: boolean,
    onClick: () => void
}

export default function DesktopSidebarItem({iconId, label, selected = false, onClick}: DesktopSidebarItemProps){
    return(
        <button className={`desktop-sidebar-item ${selected ? 'desktop-sidebar-item--selected' : ''}`} onClick={onClick} role='button'>
            <div className='desktop-sidebar-item__content'>
                <Icon id={iconId} size={20} />
                <span className='text-4'>{label}</span>
            </div>
            {selected && <Icon id='chevronRight' size={20}/>}
        </button>
    )
}