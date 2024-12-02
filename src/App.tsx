import MobileLayout from './features/mobile/layout/mobile-layout.tsx'
import DesktopLayout from './features/desktop/layout/desktop-layout.tsx'
import { useMediaQuery } from 'react-responsive';

function App() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' })

    return (
        <main className='container'>
            {
                isTabletOrMobile ? <MobileLayout/> : <DesktopLayout/>
            }
        </main>
    );
}

export default App;