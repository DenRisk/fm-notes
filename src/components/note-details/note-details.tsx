import CustomButton from '../custom-button/custom-button.tsx'
import Icon from '../icon/icon.tsx'
import './note-details.css'

export default function NoteDetails() {
    return (
        <div className='note-details'>
            <h1 className='note-details__heading text-1'>React Performance Optimization</h1>

            <div className='note-details__meta-information'>
                <div className='note-details__meta-field'>
                    <div className='note-details__meta-label'>
                        <Icon id='tag' size={18} clickable={false}/>
                        <span className='text-5'>Tags</span>
                    </div>
                    <p className='note-details__meta-data text-5'>Dev, React</p>
                </div>

                <div className='note-details__meta-field'>
                    <div className='note-details__meta-label'>
                        <Icon id='tag' size={18} clickable={false}/>
                        <span className='text-5'>Last edited</span>
                    </div>
                    <p className='note-details__meta-data text-5'>29 Oct 2024</p>
                </div>
            </div>

            <textarea className='note-details__text-area'>
                Key performance optimization techniques:

                1. Code Splitting
                - Use React.lazy() for route-based splitting
                - Implement dynamic imports for heavy components

                2.	Memoization
                - useMemo for expensive calculations
                - useCallback for function props
                - React.memo for component optimization

                3. Virtual List Implementation
                - Use react-window for long lists
                - Implement infinite scrolling
            </textarea>
            <div className='note-details__actions'>
                <CustomButton fullWidth={false} type={'primary'}>
                    Save Note
                </CustomButton>
                <CustomButton fullWidth={false} type={'secondary'}>
                    Cancel
                </CustomButton>
            </div>
        </div>
    )
}