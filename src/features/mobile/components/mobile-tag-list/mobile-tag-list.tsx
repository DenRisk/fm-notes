import './mobile-tag-list.css'
import {useNotes} from '../../../../context/NotesContext.tsx'
import {getUniqueTagList} from '../../../../helpers/note-helpers.ts'
import DesktopSidebarItem from '../../../desktop/components/desktop-sidebar-item/desktop-sidebar-item.tsx'
import {FilterType} from '../../../../context/NotesProvider.tsx'


export default function MobileTagList() {
    const {initialNotes, dispatch} = useNotes();

    const uniqueTagList = getUniqueTagList(initialNotes);

    const updateFilter = (type: FilterType, tag?: string) => {
        dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'})
        dispatch({type: 'SET_FILTER', payload: {type, tag}});
    };

    return (
        <div className='mobile-tag-list'>
            <h1 className='text-1'>Tags</h1>
            {uniqueTagList.map(tag => (
                <DesktopSidebarItem key={tag} iconId='tag' label={tag} onClick={() => updateFilter('TAG', tag)}/>
            ))
            }
        </div>
    )
}