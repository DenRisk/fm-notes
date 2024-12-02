import { ReactNode } from 'react';
import './mobile-content.css';
import MobileAddNoteButton from '../mobile-add-note-btn/mobile-add-note-btn.tsx'

type MobileContentProps = {
    children: ReactNode;
};

export default function MobileContent({ children }: MobileContentProps) {
    return (
        <section className="mobile-content">
            {children}
            <MobileAddNoteButton />
        </section>
    );
}
