/* Styles */
import './mobile-layout.css'
/* Components */
import MobileNavigation from '../components/mobile-navigation/mobile-navigation.tsx'
import MobileLogoSection from '../components/mobile-logo-section/mobile-logo-section.tsx'
import MobileContent from '../components/mobile-content/mobile-content.tsx'

export default function MobileLayout() {
    return (
        <div className="mobile-layout">
            <MobileLogoSection/>
            <MobileContent/>
            <MobileNavigation/>
        </div>
    );
}