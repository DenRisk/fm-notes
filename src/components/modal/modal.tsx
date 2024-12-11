import './modal.css';
import Icon, {IconIds} from '../icon/icon.tsx'
import CustomButton from '../custom-button/custom-button.tsx'
import {useDialogActions} from '../../hooks/useDialogActions.tsx'
import {useNoteActions} from '../../hooks/useNoteActions.tsx'

type ModalProps = {
    heading: string;
    textContent: string;
    confirmText: string;
    theme: string;
    iconId: IconIds;
    onConfirm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function Modal() {
    const {modalId, removeModal} = useDialogActions()
    const {handleArchiveNote, handleDeleteNote, handleRestoreNote} = useNoteActions()

    const deleteNoteAndCloseModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleDeleteNote(event)
        removeModal()
    }

    const archiveNoteAndCloseModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleArchiveNote(event)
        removeModal()
    }

    const restoreNoteAndCloseModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleRestoreNote(event)
        removeModal()
    }

    if (!modalId) {
        return null
    }

    if (modalId === 'archive-note') {
        return <ModalContent
            heading='Archive Note'
            textContent='Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.'
            confirmText='Archive Note'
            theme='default'
            iconId='archived'
            onConfirm={archiveNoteAndCloseModal}
            onCancel={removeModal}
        />
    }

    if (modalId === 'delete-note') {
        return <ModalContent
            heading='Delete Note'
            textContent='Are you sure you want to permanently delete this note? This action cannot be undone.'
            confirmText='Delete Note'
            theme='red'
            iconId='delete'
            onConfirm={deleteNoteAndCloseModal}
            onCancel={removeModal}
        />
    }

    if (modalId === 'restore-note') {
        return <ModalContent
            heading='Restore Note'
            textContent='Are you sure you want to restore this note? You can find it in the All Notes section and archive it anytime.'
            confirmText='Restore Note'
            theme='default'
            iconId='restore'
            onConfirm={restoreNoteAndCloseModal}
            onCancel={removeModal}
        />
    }

    return null
}

function ModalContent({heading, textContent, iconId, onConfirm, onCancel, confirmText, theme}: ModalProps) {
    return (
        <div className='backdrop'>
            <div className="modal__content">
                <div className="modal__body">
                    <div className='modal__icon-container'>
                        <Icon id={iconId} size={24}/>
                    </div>
                    <div className='modal__text-content'>
                        <div className='modal__heading text-3'>{heading}</div>
                        <div className='modal__text text-5'>{textContent}</div>
                    </div>
                </div>
                <div className="modal__actions">
                    <CustomButton
                        type='default-secondary'
                        onClick={onCancel}
                        fullWidth={false}
                    >
                        Cancel
                    </CustomButton>
                    <CustomButton
                        type={theme === 'red' ? 'default-tertiary' : 'default-primary'}
                        onClick={onConfirm}
                        fullWidth={false}
                    >
                        {confirmText}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}
