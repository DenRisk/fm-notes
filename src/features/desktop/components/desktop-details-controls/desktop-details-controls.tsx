import './desktop-details-controls.css'
import CustomButton from '../../../../components/custom-button/custom-button.tsx'

export default function DesktopDetailsControls() {
    return (
        <div className='desktop-details-controls'>
            <CustomButton fullWidth={true} type={'default-primary'}>
                Save Note
            </CustomButton>
            <CustomButton fullWidth={true} type={'default-secondary'}>
                Cancel
            </CustomButton>
        </div>
    )
}