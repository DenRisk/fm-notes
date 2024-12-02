import './desktop-note-actions-item.css'
import Icon, {IconIds} from '../../../../components/icon/icon.tsx'

export type DesktopNoteActionsItemProps = {
    iconId: IconIds,
    label: string,
    onClick: () => void
}

export default function DesktopNoteActionsItem({ iconId, label, onClick}: DesktopNoteActionsItemProps) {
    return (
        <button className='desktop-note-actions-item' onClick={() => onClick()}>
            <Icon id={iconId} size={20} clickable={true}/>
            <span className='desktop-note-actions-item__text text-4'>{label}</span>
        </button>
    )
}