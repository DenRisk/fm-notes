import './desktop-details-controls.css';
import CustomButton from '../../../../components/custom-button/custom-button.tsx';
import {useNoteActions} from '../../../../hooks/useNoteActions.tsx'
import {hasSameContent} from '../../../../helpers/note-helpers.ts'

export default function DesktopDetailsControls() {
    const {
        isCreating,
        activeNote,
        currentNoteState,
        handleSaveNote,
        handleCancel,
    } = useNoteActions();

    const isDisabled = hasSameContent(activeNote, isCreating, currentNoteState);

    return (
        <div className="desktop-details-controls">
            <CustomButton
                fullWidth={true}
                type={'default-primary'}
                onClick={handleSaveNote}
                disabled={isDisabled}
            >
                Save Note
            </CustomButton>
            <CustomButton
                fullWidth={true}
                type={'default-secondary'}
                onClick={handleCancel}
                disabled={isDisabled}
            >
                Cancel
            </CustomButton>
        </div>
    );
}
