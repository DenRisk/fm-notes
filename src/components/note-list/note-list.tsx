import NoteListItem from '../note-list-item/note-list-item.tsx'
import './note-list.css';
import CustomButton from '../custom-button/custom-button.tsx'
import Icon from '../icon/icon.tsx'

export default function NoteList({mobile}: {mobile: boolean}) {
    return (
        <div className='note-list'>
            {mobile && <h1 className='note-list__heading text-1'>Mobile Note List</h1>}
            {!mobile &&
                <div className='note-list__btn-container'>
                    <CustomButton fullWidth={true} type='primary' onClick={() => console.log('Clicked')}>
                        <Icon id='plus' size={14}/>
                        <span>Create New Note</span>
                    </CustomButton>
                </div>
            }
            <p className='note-list__text text-5'>All your archived notes are stored here. You can restore or delete them anytime.</p>
            <NoteListItem/>
            <NoteListItem/>
            <NoteListItem/>
        </div>
    )
}