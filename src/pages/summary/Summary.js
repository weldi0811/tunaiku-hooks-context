import React from 'react';
import ProfileProvider from '../../context/ProfileContext';
import SummaryDetails from './SummaryDetails';
import LoanDetailProvider from '../../context/LoanDetailsContext';




const Summary = () => {


    return (
        <div>
            {/* <LoanDetailProvider>
                <ProfileProvider> */}
                    <SummaryDetails />
                {/* </ProfileProvider>
            </LoanDetailProvider> */}

        </div>
    );
}

export default Summary