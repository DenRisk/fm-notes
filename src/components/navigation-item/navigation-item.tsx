import './navigation-item.css'
import Icon, {IconIds} from '../icon/icon.tsx'
import { useMediaQuery } from 'react-responsive'

type DesktopSidebarItemProps = {
    iconId: IconIds,
    label: string
    selected?: boolean,
    onClick: () => void
}

export default function NavigationItem({iconId, label, selected = false, onClick}: DesktopSidebarItemProps){
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1200px)'})

    return(
        <button className={`navigation-item ${selected && !isTabletOrMobile ? 'navigation-item--selected' : ''}`} onClick={onClick} >
            <div className='navigation-item__content'>
                <Icon id={iconId} size={20} />
                <span className='text-4'>{label}</span>
            </div>
            {selected && !isTabletOrMobile && <Icon id='chevronRight' size={20}/>}
        </button>
    )
}