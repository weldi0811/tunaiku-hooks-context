import React, { useContext, useState } from 'react';
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { ProfileContext } from '../../context/ProfileContext';
import { Link } from 'react-router-dom'



const UserSchema = yup.object().shape({
    name: yup.string().required('nama harus diisi').min(6, 'input valid name').max(255),
    phone: yup.string().required('nomor handphone harus diisi').min(10, 'masukkan nomor handphone yang benar').max(13, 'masukkan nomor handphone yang benar'),
    email: yup.string().email().required('masukkan email yang valid'),
    loan_purpose: yup.string().required('silahkan pilih salah satu'),
    know_tunaiku: yup.string().required('silahkan pilih salah satu'),
    email_ownage: yup.string().required('silahkan pilih salah satu'),
    id_number: yup.string().required('masukkan No KTP yang valid').min(16).max(16)
})

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const UserForm = () => {

    const { profile, setProfile, birthInfo, setBirthInfo } = useContext(ProfileContext)
    const [validateDate, setDate] = useState('')
    const { id_number } = profile

    const getBirthDay = () => {
        let date = validateDate
        let birthDate = date.toString().slice(6, 8)
        return birthDate
    }

    const getBirthMonth = () => {
        let date = validateDate
        let birthMonthinNumber = parseInt(date.toString().slice(8, 10))
        let birthMonth = monthNames[birthMonthinNumber - 1]
        return birthMonth
    }

    const getBirthYear = () => {
        let date = validateDate
        let birthYear = parseInt(date.toString().slice(10, 12))
        if (birthYear < 100) {
            return ('19' + birthYear)
        } if (birthYear > 100) {
            return ('20' + birthYear)
        }

    }

    const validateName = (values) => {
        let name = values.replace(/[^a-zA-Z ]/g, '')
        return name
    }


    const mapMonthOptions = () => {
        let month = monthNames.map(item => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })

        return month
    }
    return (
        
        <div>
            <Formik
                initialValues={profile}

                onSubmit={(values, actions) => {
                    actions.setSubmitting(true)
                    setTimeout(() => {
                        setProfile(values)
                        setBirthInfo({birthDay : getBirthDay(), birthMonth: getBirthMonth(), birthYear: getBirthYear()})
                        console.log(values)
                    }, 5)
                }}

                validationSchema={UserSchema}>

                {props => (
                    <form onSubmit={props.handleSubmit} className='container row'>
                        <div>
                            <h1 style={{ fontSize: '35px' }} className='text-center'>FORMULIR PENDAFTARAN</h1>
                        </div>

                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label className='col'>Nama Lengkap</label>
                            </div>
                            <input
                                type='text'
                                name='name'
                                onChange={props.handleChange}
                                onBlur={(e) => {
                                    props.handleBlur(e)
                                    setTimeout(() => {
                                        validateName(props.values.name)
                                    }, 1)
                                }}
                                value={validateName(props.values.name)}
                                className='form-message valid col-12'
                            />
                            {props.errors.name && props.touched.name ?
                                (<span className='form-message invalid'>{props.errors.name}</span>)
                                : ('')}
                        </div>


                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label className='col'>No. Handphone</label>
                            </div>
                            <input
                                type='number'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                name='phone'
                                value={props.values.phone}
                                className='form-message valid col-12' />
                            {props.errors.phone && props.touched.phone ?
                                (<span className='form-message invalid'>{props.errors.phone}</span>)
                                : ('')}
                        </div>

                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label className='col'>No KTP</label>
                            </div>
                            <input
                                type='number'
                                onBlur={(e) => {
                                    props.handleBlur(e)
                                    setTimeout(() => {
                                        setDate(props.values.id_number)
                                    }, 1)
                                }}
                                onChange={props.handleChange}
                                name='id_number'
                                value={props.values.id_number}
                                className='form-message valid col-12' />


                            {props.errors.id_number && props.touched.id_number ?
                                (<span className='form-message invalid'>{profile.id_number}</span>)
                                : ('')}
                        </div>

                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label className='col'>Email</label>
                            </div>
                            <input
                                type='email'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                name='email'
                                value={props.values.email}
                                className='form-message valid col-12' />
                            {props.errors.email && props.touched.email ?
                                (<span className='form-message invalid'>{props.errors.email}</span>)
                                : ('')}
                        </div>

                        <div className='form-group row container'>
                            <h5 className='text-center col-12'>Tanggal Lahir</h5>

                            <input type='text' name='birthDay' className='col-2' value={getBirthDay()}
                                onChange={props.handleChange}
                                onBlur={(e) => {
                                    props.handleBlur(e)
                                    setTimeout(() => {
                                        setProfile({...profile, birthDay : getBirthDay()})
                                    }, 1)
                                }} />
                            <select name='birthMonth' className='col-5' value={getBirthMonth()}
                                onChange={props.handleChange} 
                                onBlur={(e) => {
                                    props.handleBlur(e)
                                    setTimeout(() => {
                                        setProfile({...profile, birthMonth : getBirthMonth()})
                                    }, 1)
                                }} >
                                {mapMonthOptions()}
                            </select>
                            <input type='text' name='birthYear' className='col-4' value={getBirthYear()}
                                onChange={props.handleChange}
                                onBlur={(e) => {
                                    props.handleBlur(e)
                                    setTimeout(() => {
                                        setProfile({...profile, birthYear : getBirthYear()})
                                    }, 1)
                                }}  />
                        </div>

                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label className='col'>Kepemilikan email</label>
                            </div>

                            <div className='col'>
                                <Field name='email_ownage' component='select' placeholder='Kepemilikan email'
                                    className='float-right col-12 required'
                                    onBlur={props.handleBlur}
                                    onChange={props.handleChange}
                                    value={props.values.email_ownage}>
                                    <option value=''>pilih salah satu</option>
                                    <option value="pribadi">pribadi</option>
                                    <option value="kantor">kantor</option>
                                    <option value="lainnya">lainnya</option>
                                </Field>
                                {props.errors.email_ownage && props.touched.email_ownage ? (
                                    <span className='form-message invalid col'>{props.errors.email_ownage}</span>
                                ) : (
                                        ''
                                    )}
                            </div>
                        </div>

                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label className='col'>Tujuan Pinjaman</label>
                            </div>
                            <div className='col'>
                                <Field name='loan_purpose' component='select' placeholder='Tujuan pinjaman'
                                    className='float-right col-12 required'
                                    onChange={props.handleChange}
                                    value={props.values.loan_purpose}>
                                    <option value=''>pilih salah satu</option>
                                    <option value="liburan">liburan</option>
                                    <option value="investasi">investasi</option>
                                    <option value="lainnya">lainnya</option>
                                </Field>
                                {props.errors.loan_purpose && props.touched.loan_purpose ? (
                                    <span className='form-message invalid col'>{props.errors.loan_purpose}</span>
                                ) : (
                                        ''
                                    )}

                            </div>
                        </div>

                        <div className='form-group row container'>
                            <div className='col-12'>
                                <label className='col'>Darimana mengetahui tunaiku</label>
                            </div>
                            <div className='col'>
                                <Field name='know_tunaiku' component='select' placeholder='Tujuan pinjaman'
                                    className='float-right col-12 required'
                                    onChange={props.handleChange}
                                    value={props.values.know_tunaiku}>
                                    <option value=''>pilih salah satu</option>
                                    <option value="liburan">liburan</option>
                                    <option value="investasi">investasi</option>
                                    <option value="lainnya">lainnya</option>
                                </Field>
                                {props.errors.know_tunaiku && props.touched.know_tunaiku ? (
                                    <span className='form-message invalid col'>{props.errors.know_tunaiku}</span>
                                ) : (
                                        ''
                                    )}

                            </div>
                        </div>

                        <button type='button' onClick={() => {console.log(profile, birthInfo)}} >tes</button>

                        {profile.name === '' ?
                            <button
                                type="submit"
                                className='btn btn-success col my-2 btn-go'
                                disabled={!props.dirty && props.isSubmitting}>
                                Submit
                            </button>
                            :
                            <Link to='/Summary'>
                                <button
                                    type='button'
                                    className='btn btn-success col my-2 btn-go'>
                                    Buka Summary
                            </button>
                            
                            </Link>
                        }


                    </form>
                )}
            </Formik>
        </div>
    );
}

export default UserForm
