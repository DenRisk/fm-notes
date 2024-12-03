import './details-meta-fields.css'
import Icon from '../icon/icon.tsx'

type DetailsMetaFieldsProps = {
    tags: string[],
    lastEdited: string
}

export default function DetailsMetaFields({tags, lastEdited}: DetailsMetaFieldsProps) {
    return (
        <div className='details-meta-fields'>
            <div className='details-meta-fields__field'>
                <div className='details-meta-fields__label'>
                    <Icon id='tag' size={18} clickable={false}/>
                    <span className='text-5'>Tags</span>
                </div>
                <p className='details-meta-fields__data text-5'>{tags.join(', ')}</p>
            </div>

            <div className='details-meta-fields__field'>
                <div className='details-meta-fields__label'>
                    <Icon id='tag' size={18} clickable={false}/>
                    <span className='text-5'>Last edited</span>
                </div>
                <p className='details-meta-fields__data text-5'>{lastEdited}</p>
            </div>
        </div>
    )
}