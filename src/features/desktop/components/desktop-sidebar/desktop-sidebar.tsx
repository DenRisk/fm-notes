import './desktop-sidebar.css'
import Logo from '../../../../components/logo/logo.tsx'
import DesktopSidebarItem from '../desktop-sidebar-item/desktop-sidebar-item.tsx'

export default function DesktopSidebar() {
    return (
        <aside className='desktop-sidebar'>
            <div className='desktop-sidebar__logo-container'>
                <Logo/>
            </div>
            <ul className='desktop-sidebar__categories'>
                <DesktopSidebarItem iconId='home' label='All Notes' selected={true}/>
                <DesktopSidebarItem iconId='archived' label='Archived Notes' selected={false}/>
            </ul>
            <p className='desktop-sidebar__tag-label text-4'>Tags</p>
            <ul className='desktop-sidebar__tags'>
                <DesktopSidebarItem iconId='tag' label='Cooking' selected={false}/>
                <DesktopSidebarItem iconId='tag' label='Dev' selected={false}/>
                <DesktopSidebarItem iconId='tag' label='Fitness' selected={false}/>
                <DesktopSidebarItem iconId='tag' label='Health' selected={false}/>
                <DesktopSidebarItem iconId='tag' label='Personal' selected={false}/>
                <DesktopSidebarItem iconId='tag' label='React' selected={false}/>
            </ul>
        </aside>
    )
}