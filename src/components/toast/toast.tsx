import './toast.css';
import Icon from '../icon/icon.tsx'
import CustomButton from '../custom-button/custom-button.tsx'
import {useEffect} from 'react';
import {useDialogActions} from '../../hooks/useDialogActions.tsx'
import {ToastIds} from '../../context/dialog/DialogProvider.tsx'
import {useNotes} from '../../context/notes/NotesContext.tsx'

type ToastProps = {
    message: string;
    onClose: () => void;
    duration?: number;
    linkText?: string;
    onLinkClick?: () => void;
}

export default function ToastContainer() {
    const {toasts, removeToast} = useDialogActions();
    const {dispatch} = useNotes()

    const setArchivedNoeState = () => {
        dispatch({type: 'SET_FILTER', payload: {type: 'ARCHIVED'}});
    }


    const toastExamples: Record<ToastIds, JSX.Element> = {
        'save-note': <Toast message='Note saved' onClose={() => removeToast('save-note')}/>,
        'delete-note': <Toast message='Note deleted' onClose={() => removeToast('delete-note')}/>,
        'archive-note': <Toast message='Note archived' linkText='Archived Notes' onClose={() => removeToast('archive-note')} onLinkClick={setArchivedNoeState}/>,
        'restore-note': <Toast message='Note restored' onClose={() => removeToast('restore-note')}/>,
        'update-settings': <Toast message='Settings updated' onClose={() => removeToast('update-settings')}/>,
        'change-password': <Toast message='Password changed' onClose={() => removeToast('change-password')}/>,
        'add-tag': <Toast message='Tag added' onClose={() => removeToast('add-tag')}/>,
        'remove-tag': <Toast message='Tag removed' onClose={() => removeToast('remove-tag')}/>,
    };

    return (
        <div className='toast-container'>
            {toasts.map((toastId, key) => <div className='toast' key={key}>{toastExamples[toastId]}</div>)}
        </div>
    );
}


function Toast({message, linkText, duration = 5000, onClose, onLinkClick}: ToastProps) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <>
            <div className='toast__label'>
                <Icon id='checkmark' size={16} clickable={false} color={"#21C16B"}/>
                <span className='text-6'>{message}</span>
            </div>
            <div className='toast__actions'>
                {
                    linkText &&
                    <CustomButton fullWidth={false} type='transparent-primary'
                                  onClick={onLinkClick ? onLinkClick : () => {}}>
                        <u className='text-6'>{linkText}</u>
                    </CustomButton>
                }
                <CustomButton fullWidth={false} type='icon' onClick={onClose}>
                    <Icon id='close' size={16} clickable={true}/>
                </CustomButton>
            </div>
        </>
    )
}