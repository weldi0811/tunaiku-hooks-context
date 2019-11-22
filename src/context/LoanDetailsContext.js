import React, {createContext, useState} from 'react';

export const LoanDetailContext = createContext()

const LoanDetailProvider = (props) => {

    const [loanDetails, setLoanDetails] = useState(
        {
            loanAmount : 2,
            loanPeriod : 4,
            loanInstallment : 410000
        }
    )
    
    return (
        <LoanDetailContext.Provider value={{loanDetails, setLoanDetails}}>
            {props.children}
        </LoanDetailContext.Provider>
    );
}
 
export default LoanDetailProvider;