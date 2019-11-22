import React, {useState, createContext} from 'react';


export const ProfileContext = createContext();

const ProfileProvider = (props) => {
    const [profile, setProfile] = useState ({
        name : '',
        phone : '',
        email : '',
        loan_purpose : '',
        know_tunaiku : '',
        email_ownage : '',
        id_number : ''
    })
    
    const [birthInfo, setBirthInfo] = useState({
        birthDay : '',
        birthMonth : '',
        birthYear : ''
    })

    return(
        <ProfileContext.Provider value={{profile, setProfile, birthInfo, setBirthInfo}}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider

// import React, {createContext, useState} from 'react';

// export const ProfileContext = createContext()

// const  ProfileProvider = (props) => {

//     const [profile, setProfile] = useState('asdf')
    
//     return (
//         <ProfileContext.Provider value={{profile}} >
//             {props.children}
//         </ProfileContext.Provider>
//     );
// }
 
// export default ProfileProvider;