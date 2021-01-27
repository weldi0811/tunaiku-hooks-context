import React, { useState, createContext } from 'react';

export const ApplyFormContext = createContext();

const ApplyFormProvider = (props) => {
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        email: '',
        loan_purpose: '',
        know_tunaiku: '',
        email_ownage: '',
        id_number: ''
    })

    const [birthInfo, setBirthInfo] = useState({
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        gender : '',
        test : ''
    })

    const [selectedDate, setSelectedDate] = useState(new Date())

    const [loanInfo, setLoanInfo] = useState({
        loanAmount: 2,
        loanPeriod: 6,
        loanInstallment: 410000
    })
    return (
        <ApplyFormContext.Provider value={{profile,setProfile,birthInfo,setBirthInfo,loanInfo,setLoanInfo, selectedDate, setSelectedDate}}>
            {props.children}
        </ApplyFormContext.Provider>
    );
}

export default ApplyFormProvider;