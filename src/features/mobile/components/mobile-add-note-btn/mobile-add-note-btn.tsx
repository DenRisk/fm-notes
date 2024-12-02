import './mobile-add-note-btn.css';
import Icon from '../../../../components/icon/icon.tsx'


export default function MobileAddNoteButton() {
    return (
        <button className='mobile-add-note-btn'>
            <Icon id={'plus'} size={32} />
        </button>
    )
}