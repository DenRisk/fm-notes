import './desktop-sidebar.css'
import Logo from '../../../../components/logo/logo.tsx'
import NavigationItem from '../../../../components/navigation-item/navigation-item.tsx'
import {useNotes} from '../../../../context/notes/NotesContext.tsx'
import {FilterType} from '../../../../context/notes/NotesProvider.tsx'
import {getUniqueTagList} from '../../../../helpers/note-helpers.ts'

export default function DesktopSidebar() {
    const {initialNotes, filter, dispatch, view} = useNotes();

    const uniqueTagList = getUniqueTagList(initialNotes);

    const updateFilter = (type: FilterType, tag?: string) => {
        dispatch({type: 'TOGGLE_VIEW', payload: 'LIST'});
        dispatch({type: 'SET_FILTER', payload: {type, tag}});
    };

    return (
        <aside className='desktop-sidebar'>
            <div className='desktop-sidebar__logo-container'>
                <Logo/>
            </div>
            <div className='desktop-sidebar__categories'>
                <NavigationItem
                    iconId='home'
                    label='All Notes'
                    selected={filter.type === 'ALL' && view !== 'SETTINGS'}
                    onClick={() => updateFilter('ALL')}
                />
                <NavigationItem
                    iconId='archived'
                    label='Archived Notes'
                    selected={filter.type === 'ARCHIVED' && view !== 'SETTINGS'}
                    onClick={() => updateFilter('ARCHIVED')}
                />
            </div>
            <p className='desktop-sidebar__tag-label text-4'>Tags</p>
            <div className='desktop-sidebar__tags'>
                {
                    uniqueTagList.map(tag => (
                        <NavigationItem
                            key={tag}
                            iconId='tag'
                            label={tag}
                            selected={filter.type === 'TAG' && filter.tag === tag && view !== 'SETTINGS'}
                            onClick={() => updateFilter('TAG', tag)}
                        />
                    ))
                }
            </div>
        </aside>
    )
}