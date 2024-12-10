import {useMediaQuery} from 'react-responsive';
import {NotesProvider} from './context/notes/NotesProvider.tsx';
import MobileLayout from './features/mobile/layout/mobile-layout.tsx'
import DesktopLayout from './features/desktop/layout/desktop-layout.tsx'
import {DialogProvider} from './context/dialog/DialogProvider.tsx'
import Modal from './components/modal/modal.tsx'
import ToastContainer from './components/toast/toast.tsx'
import {SettingsProvider} from './context/settings/settingsProvider.tsx'

function App() {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1200px)'})

    return (
        <SettingsProvider>
            <NotesProvider>
                <DialogProvider>
                    <main className='container'>
                        {
                            isTabletOrMobile ? <MobileLayout/> : <DesktopLayout/>
                        }
                    </main>
                    <Modal/>
                    <ToastContainer/>
                </DialogProvider>
            </NotesProvider>
        </SettingsProvider>
    );
}

export default App;