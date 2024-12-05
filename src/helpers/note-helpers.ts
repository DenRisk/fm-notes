import {Note} from '../types/note.ts'
import {FilterType} from '../context/NotesProvider.tsx'

export const getFilteredNotes = (notes: Note[], filter: {
    type: FilterType;
    tag?: string,
    searchTerm?: string
}): Note[] => {
    switch (filter.type) {
        case 'ALL':
            return notes;
        case 'ARCHIVED':
            return notes.filter(note => note.isArchived);
        case 'TAG':
            return notes.filter(note => note.tags.includes(filter.tag || ''));
        case 'SEARCH':
            return notes.filter(note => note.title.toLowerCase().includes(filter.searchTerm?.toLowerCase() || ''));
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