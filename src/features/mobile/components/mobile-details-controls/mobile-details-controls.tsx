import './mobile-details-controls.css';
import CustomButton from '../../../../components/custom-button/custom-button.tsx'
import Icon from '../../../../components/icon/icon.tsx'

export default function MobileDetailsControls() {
    return (
        <div className='mobile-details-controls'>
            <CustomButton type='transparent-primary' fullWidth={false}>
                <Icon id='chevronLeft' size={18} clickable={true}/>
                <span>Go Back</span>
            </CustomButton>
            <div className="mobile-details-controls__actions">
                <CustomButton type='icon' fullWidth={false}>
                    <Icon id='delete' size={18} clickable={true}/>
                </CustomButton>
                <CustomButton type='icon' fullWidth={false}>
                    <Icon id='archived' size={18} clickable={true}/>
                </CustomButton>
                <CustomButton type='transparent-primary' fullWidth={false}>
                    <span>Cancel</span>
                </CustomButton>
                <CustomButton type='transparent-secondary' fullWidth={false}>
                    <span>Save Note</span>
                </CustomButton>
            </div>
        </div>
    )
}