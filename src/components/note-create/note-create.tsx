import './note-create.css';
import DetailsMetaFields from '../details-meta-fields/details-meta-fields.tsx'
import Textarea from '../textarea/textarea.tsx'
import Input from '../input/input.tsx'
import {useNoteActions} from '../../hooks/useNoteActions.tsx'

export default function NoteCreate() {
    const {handleTagsChange, handleTitleChange, handleTextareaChange, currentNoteState} = useNoteActions();
    const noteContent = currentNoteState.content;

    return (
        <>
            <Input
                type='text'
                classes='text-1'
                placeholder='Enter a title...'
                onChange={e => handleTitleChange(e.target.value)}
            ></Input>
            <DetailsMetaFields
                isCreating={true}
                onAddTag={(e) => handleTagsChange(e.target.value)}
            />
            <div className='desktop-note-details__text-area'>
                <Textarea content={noteContent} onChange={handleTextareaChange}/>
            </div>
        </>
    )
}