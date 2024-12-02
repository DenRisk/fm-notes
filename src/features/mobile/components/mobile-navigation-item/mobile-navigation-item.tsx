import './mobile-navigation-item.css'
import Icon, {IconIds} from '../../../../components/icon/icon.tsx'

type MobileNavigationItemProps = {
    id: IconIds,
    label: string,
    onHandleClick: () => void
}

export default function MobileNavigationItem({id, label, onHandleClick}: MobileNavigationItemProps) {
    return (
        <button className='mobile-navigation-item' onClick={() => onHandleClick()}>
            <Icon id={id} clickable={true}/>
            <span className='mobile-navigation-item__text text-6'>{label}</span>
        </button>
    )
}