import './mobile-navigation.css'
import MobileNavigationItem from '../mobile-navigation-item/mobile-navigation-item.tsx'
import {useNotes} from '../../../../context/NotesContext.tsx'

export default function MobileNavigation() {
    const {filter, dispatch, isCreating} = useNotes()

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (filter.type !== 'SEARCH') {
            dispatch({type: 'TOGGLE_DETAILS_VIEW', payload: false})
            dispatch({type: 'SET_FILTER', payload: {type: 'SEARCH', searchTerm: ''}})
        }
    }

    const handleHome = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (filter.type !== 'ALL') {
            dispatch({type: 'TOGGLE_DETAILS_VIEW', payload: false})
            dispatch({type: 'SET_FILTER', payload: {type: 'ALL'}})
        }
    }

    const handleArchived = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (filter.type !== 'ARCHIVED') {
            dispatch({type: 'TOGGLE_DETAILS_VIEW', payload: false})
            dispatch({type: 'SET_FILTER', payload: {type: 'ARCHIVED'}})
        }
    }

    return (
        <nav className='mobile-navigation'>
            <MobileNavigationItem id='home' label='Home' onHandleClick={handleHome} selected={!isCreating && filter.type === 'ALL'}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='search' label='Search' onHandleClick={handleSearch} selected={!isCreating && filter.type === 'SEARCH'}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='archived' label='Archived' onHandleClick={handleArchived} selected={!isCreating && filter.type === 'ARCHIVED'}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='tag' label='Tags' onHandleClick={() => console.log('Tags')} selected={false}/>
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem id='settings' label='Settings' onHandleClick={() => console.log('Settings')} selected={false}/>
        </nav>
    )
}