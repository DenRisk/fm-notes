import './search-input.css';
import Icon from '../icon/icon.tsx'

type SearchInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({onChange}: SearchInputProps) {
    return (
        <div className='search'>
            <Icon id='search' size={20} color='#717784'/>
            <input
                type="text"
                className='search__input'
                placeholder="Search by title or tags…"
                onChange={onChange}
            />
        </div>
    );
}