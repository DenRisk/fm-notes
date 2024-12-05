import './mobile-header.css';
import {useNotes} from '../../../../context/NotesContext.tsx'
import {SearchInput} from '../../../../components/search-input/search-input.tsx'

export default function MobileHeader() {
    const {filter, dispatch} = useNotes()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'SET_FILTER', payload: {type: 'SEARCH', searchTerm: e.target.value}})
    }

    return (
        <header className='mobile-header'>
            {filter.type === 'TAG' &&
                <h1 className='text-1'>
                    <span className='desktop-header__heading--tagged'>Notes Tagged:</span> {filter.tag}
                </h1>
            }
            {filter.type === 'ARCHIVED' && <h1 className='text-1'>Archived Notes</h1>}
            {(filter.type === 'ALL' || filter.type === 'SEARCH' && !filter.searchTerm) &&
                <h1 className='text-1'>All Notes</h1>}
            {filter.type === 'SEARCH' && filter.searchTerm &&
                <h1 className='text-1'>
                    <span className='desktop-header__heading--tagged'>Showing results for:</span> {filter.searchTerm}
                </h1>
            }

            {
                filter.type === 'SEARCH' &&
                <div className='mobile-header__search'>
                    <SearchInput onChange={handleSearch}/>
                    {filter.searchTerm &&
                        <p className='text-5'>
                            All notes matching <span>"{filter.searchTerm}"</span> are displayed below.
                        </p>}
                </div>
            }
        </header>
    )
}