import MobileLayout from './features/mobile/layout/mobile-layout.tsx'
import DesktopLayout from './features/desktop/layout/desktop-layout.tsx'
import {useMediaQuery} from 'react-responsive';
import { NotesProvider } from './context/NotesProvider.tsx';

function App() {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1200px)'})

    return (
        <NotesProvider>
            <main className='container'>
                {
                    isTabletOrMobile ? <MobileLayout/> : <DesktopLayout/>
                }
            </main>
        </NotesProvider>
    );
}

export default App;