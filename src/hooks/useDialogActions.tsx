import {useDialog} from '../context/dialog/DialogContext.tsx'
import {ModalIds, ToastIds} from '../context/dialog/DialogProvider.tsx'

export function useDialogActions() {
    const {modalId, toasts, dispatch} = useDialog();

    const setModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, modalId: ModalIds) => {
        e.preventDefault()
        dispatch({type: 'SET_MODAL', payload: modalId});
    };

    const removeModal = () => {
        dispatch({type: 'REMOVE_MODAL'});
    }

    const addToast = (toastId: ToastIds) => {
        dispatch({type: 'ADD_TOAST', payload: toastId});
    }

    const removeToast = (toastId: ToastIds) => {
        dispatch({type: 'REMOVE_TOAST', payload: toastId});
    }

    return {
        modalId,
        toasts,
        setModal,
        removeModal,
        addToast,
        removeToast
    };
}
