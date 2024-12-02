import './search-input.css';
import Icon from '../icon/icon.tsx'

export function SearchInput() {
    return (
        <div className='search'>
            <Icon id='search' size={20} color='#717784'/>
            <input
                type="text"
                className='search__input'
                placeholder="Search by title, content, or tags…"
            />
        </div>
    );
}