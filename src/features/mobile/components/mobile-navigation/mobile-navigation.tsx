import './mobile-navigation.css'
import MobileNavigationItem from '../mobile-navigation-item/mobile-navigation-item.tsx'

export default function MobileNavigation() {
    return (
        <nav className='mobile-navigation'>
            <MobileNavigationItem id='home' label='Home' onHandleClick={() => console.log('Home')}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='search' label='Search' onHandleClick={() => console.log('Search')}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='archived' label='Archived' onHandleClick={() => console.log('Archived')}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='tag' label='Tags' onHandleClick={() => console.log('Tags')}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='settings' label='Settings' onHandleClick={() => console.log('Settings')}/>
        </nav>
    )
}