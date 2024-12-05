import './mobile-details-controls.css';
import CustomButton from '../../../../components/custom-button/custom-button.tsx'
import Icon from '../../../../components/icon/icon.tsx'
import {useNoteActions} from '../../../../hooks/useNoteActions.tsx'
import {hasSameContent} from '../../../../helpers/note-helpers.ts'


export default function MobileDetailsControls() {
    const {activeNote, currentNoteState, isCreating, handleCancel, handleSaveNote, handleViewChange, handleArchiveNote, handleDeleteNote} = useNoteActions()
    const isDisabled = hasSameContent(activeNote, isCreating, currentNoteState);

    return (
        <div className='mobile-details-controls'>
            <CustomButton type='transparent-primary' fullWidth={false} onClick={(e) => handleViewChange(e, 'LIST', true)}>
                <Icon id='chevronLeft' size={18} clickable={true}/>
                <span>Go Back</span>
            </CustomButton>
            <div className="mobile-details-controls__actions">
                {!isCreating &&
                    <>
                        <CustomButton type='icon' fullWidth={false} onClick={handleDeleteNote}>
                            <Icon id='delete' size={18} clickable={true}/>
                        </CustomButton>
                        <CustomButton type='icon' fullWidth={false} onClick={handleArchiveNote}>
                            <Icon id='archived' size={18} clickable={true}/>
                        </CustomButton>
                    </>
                }
                <CustomButton type='transparent-primary' fullWidth={false} onClick={handleCancel} disabled={isDisabled}>
                    <span>Cancel</span>
                </CustomButton>
                <CustomButton type='transparent-secondary' fullWidth={false} onClick={handleSaveNote} disabled={isDisabled}>
                    <span>Save Note</span>
                </CustomButton>
            </div>
        </div>
    )
}