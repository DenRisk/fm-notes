import './mobile-navigation-item.css'
import Icon, {IconIds} from '../../../../components/icon/icon.tsx'

type MobileNavigationItemProps = {
    id: IconIds,
    label: string,
    onHandleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    selected: boolean
}

export default function MobileNavigationItem({id, label, onHandleClick, selected}: MobileNavigationItemProps) {
    return (
        <button className={`mobile-navigation-item ${selected ? 'mobile-navigation-item--selected' : '' }`} onClick={onHandleClick}>
            <Icon id={id} clickable={true}/>
            <span className='mobile-navigation-item__text text-6'>{label}</span>
        </button>
    )
}