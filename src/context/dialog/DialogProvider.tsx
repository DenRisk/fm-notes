import {ReactNode, useReducer} from 'react';
import {DialogContext} from './DialogContext.tsx'
import {dialogReducer} from './dialogReducer.ts'

export type ModalIds = 'archive-note' | 'delete-note'
export type ToastIds = 'save-note' | 'archive-note' | 'delete-note' |'restore-note' | 'update-settings' | 'change-password' | 'add-tag' | 'remove-tag'

export type DialogState = {
    modalId: ModalIds | null;
    toasts: ToastIds[];
}

const dialogState: DialogState = {
    modalId: null,
    toasts: []
}

export const DialogProvider = ({children}: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(dialogReducer, dialogState);

    return (
        <DialogContext.Provider value={{
            modalId: state.modalId,
            toasts: state.toasts,
            dispatch
        }}>
            {children}
        </DialogContext.Provider>
    );
};
