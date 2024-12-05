import './desktop-header.css';
import {SearchInput} from '../../../../components/search-input/search-input.tsx'
import Icon from '../../../../components/icon/icon.tsx'
import {useNotes} from '../../../../context/NotesContext.tsx'

export default function DesktopHeader() {
    const {filter, dispatch} = useNotes()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'SET_FILTER', payload: {type: 'SEARCH', searchTerm: e.target.value}})
    }

    return (
        <header className='desktop-header'>
            {filter.type === 'TAG' &&
                <h1 className='text-1'>
                    <span className='desktop-header__heading--tagged'>Notes Tagged:</span> {filter.tag}
                </h1>
            }
            {filter.type === 'ARCHIVED' && <h1 className='text-1'>Archived Notes</h1>}
            {(filter.type === 'ALL' || filter.type === 'SEARCH' && !filter.searchTerm) && <h1 className='text-1'>All Notes</h1>}
            {filter.type === 'SEARCH' && filter.searchTerm &&
                <h1 className='text-1'>
                    <span className='desktop-header__heading--tagged'>Showing results for:</span> {filter.searchTerm}
                </h1>
            }
            <div className='desktop-header__right'>
                <SearchInput onChange={handleSearch}/>
                <Icon id='settings' color='#717784' size={24} clickable={true}/>
            </div>
        </header>
    )
}