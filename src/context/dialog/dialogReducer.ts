import {DialogState, ModalIds, ToastIds} from './DialogProvider.tsx'

export type DialogAction =
    { type: 'SET_MODAL'; payload: ModalIds | null }
    | { type: 'REMOVE_MODAL' }
    | { type: 'ADD_TOAST'; payload: ToastIds }
    | { type: 'REMOVE_TOAST'; payload: ToastIds }


export const dialogReducer = (state: DialogState, action: DialogAction): DialogState => {
    switch (action.type) {
        case 'SET_MODAL':
            return {
                ...state,
                modalId: action.payload,
            };
        case 'REMOVE_MODAL':
            return {
                ...state,
                modalId: null
            }
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [...state.toasts, action.payload]
            }
        case 'REMOVE_TOAST':
            return {
                ...state,
                toasts: state.toasts.filter(toast => toast !== action.payload)
            }
        default:
            return state;
    }
};
