import './details-meta-fields.css'
import Icon from '../icon/icon.tsx'
import Input from '../input/input.tsx'

type DetailsMetaFieldsProps = {
    isCreating: boolean,
    tags?: string[],
    lastEdited?: string,
    onAddTag?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DetailsMetaFields({tags, lastEdited, isCreating, onAddTag}: DetailsMetaFieldsProps) {
    return (
        <div className='details-meta-fields'>
            <div className='details-meta-fields__field'>
                <div className='details-meta-fields__label'>
                    <Icon id='tag' size={18} clickable={false}/>
                    <span className='text-5'>Tags</span>
                </div>
                {!isCreating && tags && <p className='details-meta-fields__data text-5'>{tags.join(', ')}</p>}
                {isCreating &&
                    <Input
                        classes='text-5'
                        type='text'
                        placeholder='Add tags separated by commas (e.g. Work, Planning)'
                        onChange={onAddTag ?? (() => {})}
                    />
                }
            </div>

            <div className='details-meta-fields__field'>
                <div className='details-meta-fields__label'>
                    <Icon id='tag' size={18} clickable={false}/>
                    <span className='text-5'>Last edited</span>
                </div>

                {!isCreating && lastEdited && <p className='details-meta-fields__data text-5'>{lastEdited}</p>}
                {isCreating && <p className='details-meta-fields__placeholder text-5'>Not yet saved</p>}
            </div>
        </div>
    )
}