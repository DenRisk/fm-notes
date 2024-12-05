import { ReactNode } from 'react'
import './empty-notes-text.css'

type EmptyNotesTextProps = {
    children: ReactNode
}

export default function EmptyNotesText({children}: EmptyNotesTextProps) {
    return (
        <div className='empty-notes-text text-5'>
            {children}
        </div>
    )
}