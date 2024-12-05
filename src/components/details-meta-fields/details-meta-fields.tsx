import './details-meta-fields.css'
import Icon from '../icon/icon.tsx'
import Input from '../input/input.tsx'
import {formatDate} from '../../helpers/note-helpers.ts'

type DetailsMetaFieldsProps = {
    isCreating: boolean,
    tags?: string[],
    lastEdited?: string,
    isArchived?: boolean,
    onAddTag?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DetailsMetaFields({
                                              tags,
                                              lastEdited,
                                              isCreating,
                                              onAddTag,
                                              isArchived
                                          }: DetailsMetaFieldsProps) {
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
                        onChange={onAddTag ?? (() => {
                        })}
                    />
                }
            </div>

            {isArchived &&
                <div className='details-meta-fields__field'>
                    <div className='details-meta-fields__label'>
                        <Icon id='status' size={18} clickable={false}/>
                        <span className='text-5'>Status</span>
                    </div>
                    <p className='details-meta-fields__data text-5'>Archived</p>
                </div>
            }

            <div className='details-meta-fields__field'>
                <div className='details-meta-fields__label'>
                    <Icon id='clock' size={18} clickable={false}/>
                    <span className='text-5'>Last edited</span>
                </div>

                {
                    !isCreating && lastEdited &&
                    <p className='details-meta-fields__data text-5'>
                        {formatDate(lastEdited)}
                    </p>
                }
                {
                    isCreating &&
                    <p className='details-meta-fields__placeholder text-5'>
                        Not yet saved
                    </p>
                }
            </div>
        </div>
    )
}