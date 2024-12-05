import './desktop-sidebar.css'
import Logo from '../../../../components/logo/logo.tsx'
import DesktopSidebarItem from '../desktop-sidebar-item/desktop-sidebar-item.tsx'
import {useNotes} from '../../../../context/NotesContext.tsx'
import {FilterType} from '../../../../context/NotesProvider.tsx'
import {getUniqueTagList} from '../../../../helpers/note-helpers.ts'

export default function DesktopSidebar() {
    const {initialNotes, filter, dispatch} = useNotes();

    const uniqueTagList = getUniqueTagList(initialNotes);

    const updateFilter = (type: FilterType, tag?: string) => {
        dispatch({type: 'SET_FILTER', payload: {type, tag}});
    };

    return (
        <aside className='desktop-sidebar'>
            <div className='desktop-sidebar__logo-container'>
                <Logo/>
            </div>
            <div className='desktop-sidebar__categories'>
                <DesktopSidebarItem
                    iconId='home'
                    label='All Notes'
                    selected={filter.type === 'ALL'}
                    onClick={() => updateFilter('ALL')}
                />
                <DesktopSidebarItem
                    iconId='archived'
                    label='Archived Notes'
                    selected={filter.type === 'ARCHIVED'}
                    onClick={() => updateFilter('ARCHIVED')}
                />
            </div>
            <p className='desktop-sidebar__tag-label text-4'>Tags</p>
            <div className='desktop-sidebar__tags'>
                {
                    uniqueTagList.map(tag => (
                        <DesktopSidebarItem
                            key={tag}
                            iconId='tag'
                            label={tag}
                            selected={filter.type === 'TAG' && filter.tag === tag}
                            onClick={() => updateFilter('TAG', tag)}
                        />
                    ))
                }
            </div>
        </aside>
    )
}