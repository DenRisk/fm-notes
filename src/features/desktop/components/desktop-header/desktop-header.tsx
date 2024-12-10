import './desktop-header.css';
import {SearchInput} from '../../../../components/search-input/search-input.tsx'
import Icon from '../../../../components/icon/icon.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'

export default function DesktopHeader() {
    const {filter, dispatch: dispatchNotes, view} = useNotes()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatchNotes({type: 'TOGGLE_VIEW', payload: 'LIST'})
        dispatchNotes({type: 'SET_FILTER', payload: {type: 'SEARCH', searchTerm: e.target.value}})
    }

    const openSettings = () => {
        dispatchNotes({type: 'TOGGLE_VIEW', payload: 'SETTINGS'})
    }

    return (
        <header className='desktop-header'>
            {filter.type === 'TAG' && view !== 'SETTINGS' &&
                <h1 className='text-1'>
                    <span className='desktop-header__heading--tagged'>Notes Tagged:</span> {filter.tag}
                </h1>
            }
            {filter.type === 'ARCHIVED' && view !== 'SETTINGS' && <h1 className='text-1'>Archived Notes</h1>}
            {(filter.type === 'ALL' && view !== 'SETTINGS' || filter.type === 'SEARCH' && !filter.searchTerm && view !== 'SETTINGS') && <h1 className='text-1'>All Notes</h1>}
            {filter.type === 'SEARCH' && filter.searchTerm && view !== 'SETTINGS' &&
                <h1 className='text-1'>
                    <span className='desktop-header__heading--tagged'>Showing results for:</span> {filter.searchTerm}
                </h1>
            }
            {view === 'SETTINGS' && <h1 className='text-1'>Settings</h1>}
            <div className='desktop-header__right'>
                <SearchInput onChange={handleSearch}/>
                <Icon id='settings' size={24} clickable={true} onTrigger={openSettings}/>
            </div>
        </header>
    )
}