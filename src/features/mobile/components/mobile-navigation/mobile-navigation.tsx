import './mobile-navigation.css'
import MobileNavigationItem from '../mobile-navigation-item/mobile-navigation-item.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'

export default function MobileNavigation() {
    const {filter, dispatch, view} = useNotes()

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (filter.type !== 'SEARCH') {
            dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'})
            dispatch({type: 'SET_FILTER', payload: {type: 'SEARCH', searchTerm: ''}})
        }
    }

    const handleHome = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (filter.type !== 'ALL') {
            dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'})
            dispatch({type: 'SET_FILTER', payload: {type: 'ALL'}})
        }
    }

    const handleArchived = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (filter.type !== 'ARCHIVED') {
            dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'})
            dispatch({type: 'SET_FILTER', payload: {type: 'ARCHIVED'}})
        }
    }

    const handleTags = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch({type: 'TOGGLE_VIEW', payload: 'TAGS'})
    }

    const handleSettings = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch({type: 'TOGGLE_VIEW', payload: 'SETTINGS'})
    }

    return (
        <nav className='mobile-navigation'>
            <MobileNavigationItem
                id='home'
                label='Home'
                onHandleClick={handleHome}
                selected={view === 'LIST' && filter.type === 'ALL'}
            />
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem
                id='search'
                label='Search'
                onHandleClick={handleSearch}
                selected={view === 'LIST' && filter.type === 'SEARCH'}
            />
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem
                id='archived'
                label='Archived'
                onHandleClick={handleArchived}
                selected={view === 'LIST' && filter.type === 'ARCHIVED'}
            />
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem
                id='tag'
                label='Tags'
                onHandleClick={handleTags}
                selected={view === 'TAGS'}
            />
            <div className="mobile-navigation__divider"/>
            <MobileNavigationItem
                id='settings'
                label='Settings'
                onHandleClick={handleSettings}
                selected={view === 'SETTINGS'}
            />
        </nav>
    )
}