import './desktop-header.css';
import {SearchInput} from '../../../../components/search-input/search-input.tsx'
import Icon from '../../../../components/icon/icon.tsx'

export default function DesktopHeader(){
    return(
        <header className='desktop-header'>
            <h1 className='text-1'>Archived Notes</h1>
            <div className='desktop-header__right'>
                <SearchInput />
                <Icon id='settings' color='#717784' size={24} clickable={true}/>
            </div>
        </header>
    )
}