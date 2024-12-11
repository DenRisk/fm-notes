import {Note} from '../types/note.ts'
import {FilterType} from '../context/notes/NotesProvider.tsx'
import {format} from 'date-fns';


export const getFilteredNotes = (notes: Note[], filter: {
    type: FilterType;
    tag?: string,
    searchTerm?: string
}): Note[] => {
    switch (filter.type) {
        case 'ALL':
            return notes.filter(note => !note.isArchived);
        case 'ARCHIVED':
            return notes.filter(note => note.isArchived);
        case 'TAG':
            return notes.filter(note => note.tags.includes(filter.tag || ''));
        case 'SEARCH':
            return notes.filter(note => {
                const searchTerm = filter.searchTerm?.toLowerCase() || '';
                return (
                    (note.title.toLowerCase().includes(searchTerm) && !note.isArchived ||
                        note.tags.some(tag => tag.toLowerCase().includes(searchTerm))) &&
                    !note.isArchived
                );
            });
        default:
            return notes;
    }
};

export const getUniqueTagList = (notes: Note[]): string[] => {
    const tagsSet = new Set<string>();

    notes.forEach(note => {
        note.tags.forEach(tag => tagsSet.add(tag));
    });

    return Array.from(tagsSet);
}

export const hasSameContent = ((activeNote: Note | null, isCreating: boolean, currentNoteState: {
    title: string,
    content: string,
    tags: string
}) => {
    if (!activeNote || isCreating) {
        return false;
    }

    const {content} = currentNoteState;
    return content === activeNote.content
});

export const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return format(date, "dd MMM yyyy");
};
