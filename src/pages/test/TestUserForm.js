import React, { useContext, useState } from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'
import { ApplyFormContext } from '../../context/ApplyFormContext';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'




const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const UserSchema = yup.object().shape({
    name: yup.string().required('nama harus diisi').min(6, 'input valid name').max(255),
    phone: yup.string().required('nomor handphone harus diisi').min(10, 'masukkan nomor handphone yang benar').max(13, 'masukkan nomor handphone yang benar')
        .test('test-name', 'format nomor handphone salah',
            function (value) {
                if (value === undefined) {
                    value = 0
                }
                let phoneNumber = value.toString().slice(0, 1)
                if (phoneNumber !== '8') {
                    return false
                }
                else {
                    return true
                }
            }),
    email: yup.string().email().required('masukkan email yang valid'),
    loan_purpose: yup.string().required('silahkan pilih salah satu'),
    know_tunaiku: yup.string().required('silahkan pilih salah satu'),
    email_ownage: yup.string().required('silahkan pilih salah satu'),
    id_number: yup.string().required('masukkan No KTP yang valid').min(16).max(16)
})

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const year = ['1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959',
    '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974',
    '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
    '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006',
    '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',]

const day = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31',
]

const genderList = ['Perempuan', 'Pria']


const TestUserForm = () => {

    const { profile, setProfile, birthInfo, setBirthInfo, selectedDate, setSelectedDate } = useContext(ApplyFormContext)
    const [validateDate, setDate] = useState('')
    const [DoB, setDoB] = useState({
        DayOB: '',
        MonthOB: '',
        YearOB: '',
        gender: ''
    })
    const { DayOB, MonthOB, YearOB, gender } = DoB
    const classes = useStyles()


    const handleDateChange = date => {
        setSelectedDate(date)
        console.log(selectedDate)
    }


    const getBirthDay = () => {
        let value = validateDate
        let birthDate = value.toString().slice(6, 8)
        if (parseInt(birthDate) > 31) {
            birthDate = (parseInt(birthDate) - 40).toString()
            return birthDate
        }
        return birthDate
    }

    const getBirthMonth = () => {
        let value = validateDate
        let birthMonthinNumber = parseInt(value.toString().slice(8, 10))
        let birthMonth = monthNames[birthMonthinNumber - 1]
        return birthMonth
    }

    const getBirthYear = () => {
        let value = validateDate
        let birthYear = parseInt(value.toString().slice(10, 12))
        if (birthYear < 43) {
            let result = '20' + birthYear
            return result
        }
        if (birthYear > 43) {
            let result = '19' + birthYear
            return result
        }
    }

    const getGender = () => {
        let value = validateDate
        let gender = value.toString().slice(6, 8)


        return parseInt(gender) > 31 ? 'Perempuan' : 'Pria'
        // if (parseInt(gender) > 31) {
        //     return ('Perempuan')
        // } else {
        //     return ('Pria')
        // }
    }

    const validateName = (values) => {
        let name = values.replace(/[^a-zA-Z ]/g, '')
        return name
    }



    const getDate = () => {

        let date = getBirthDay() + '-' + getBirthMonth() + '-' + getBirthYear()
        let newDate = new Date(date)
        return newDate
    }



    const mapMonthOptions = () => {
        let monthOptions = monthNames.map(item => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })
        return monthOptions
    }

    const mapYearOptions = () => {
        let yearOptions = year.map(item => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })
        return yearOptions
    }

    const mapDayOptions = () => {
        let dayOptions = day.map(item => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })
        return dayOptions
    }

    const mapGenderOptions = () => {
        let genderOptions = genderList.map(item => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })
        return genderOptions
    }



    return (


        <div>
            <Formik
                initialValues={profile}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true)
                    // setTimeout(() => {
                    setProfile(values)
                    setBirthInfo({ birthDay: DoB.DayOB, birthMonth: DoB.MonthOB, birthYear: DoB.YearOB, gender: DoB.gender })
                    // }, 5)
                }}
                validationSchema={UserSchema}>

                {props => (
                    <form onSubmit={props.handleSubmit} className='container row'>

                        <div className='form-group row container'>

                            <TextField
                                error={props.errors.name && props.touched.name}
                                helperText={(props.errors.name && props.touched.name) && props.errors.name}
                                type='text'
                                name='name'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={validateName(props.values.name)}
                                id='outlined-basic'
                                label='Nama Lengkap'
                                margin='normal'
                                className={classes.textField}
                                variant='outlined'
                                fullWidth
                            />

                        </div>



                        <div className='form-group row container'>
                            <TextField
                                error={props.errors.phone && props.touched.phone}
                                helperText={(props.errors.phone && props.touched.phone) && props.errors.phone}

                                type='number'
                                name='phone'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.phone}
                                id='outlined-basic'
                                label='Nomor Handphone'
                                margin='normal'
                                className={classes.textField}
                                variant='outlined'
                                fullWidth
                            />

                        </div>

                        <div className='form-group row container'>
                            {/* <div className='col-12'>
                                <label className='col'>Email</label>
                            </div> */}
                            <TextField
                                error={props.errors.email && props.touched.email}
                                helperText={(props.errors.email && props.touched.email) && props.errors.email}
                                type='email'
                                name='email'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                id='outlined-basic'
                                label='Email'
                                margin='normal'
                                className={classes.textField}
                                variant='outlined'
                                fullWidth

                            />
                        </div>

                        <div className='form-group row container'>

                            <TextField
                                error={props.errors.id_number && props.touched.id_number}
                                helperText={(props.errors.id_number && props.touched.id_number) && props.errors.id_number}

                                type='number'
                                variant='outlined'
                                onBlur={(e) => {
                                    props.handleBlur(e)
                                    setSelectedDate(getDate())
                                    // setTimeout(() => {
                                    setDoB({ MonthOB: getBirthMonth(), YearOB: getBirthYear(), DayOB: getBirthDay(), gender: getGender() })
                                    // }, 1)
                                    console.log(DoB)
                                }}
                                onChange={(e) => {
                                    props.handleChange(e)
                                    // setTimeout(() => {
                                    setDate(props.values.id_number)
                                    // }, 1)
                                }}
                                name='id_number'
                                value={props.values.id_number}
                                id='outlined-basic'
                                label='No KTP'
                                margin='normal'
                                className={classes.textField}
                                fullWidth
                            />
                        </div>
                        <div className='form-group row container'>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Tanggal Lahir"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>

                        <div className='form-group row container'>

                            <div className='col'>
                                <InputLabel htmlFor='gender'>Gender</InputLabel>
                                <Select name='gender' className='col' id='gender'
                                    placeholder='gender' value={DoB.gender}
                                    onChange={
                                        e => {
                                            setDoB({ ...DoB, gender: e.target.value })
                                        }
                                    }
                                    onBlur={props.handleBlur}>
                                    {mapGenderOptions()}
                                </Select>
                            </div>


                        </div>

                        <div className='form-group row container'>

                            <div className='col'>
                                    <InputLabel htmlFor='email_ownage'>Kepemilikan Email</InputLabel>
                                    <Select name='email_ownage' placeholder='Kepemilikan email'
                                        className='float-right col-12 required'
                                        id='email_ownage'
                                        label='Kepemilikan Email'
                                        onBlur={props.handleBlur}
                                        onChange={props.handleChange}
                                        value={props.values.email_ownage}>
                                        <option value="pribadi">pribadi</option>
                                        <option value="kantor">kantor</option>
                                        <option value="lainnya">lainnya</option>
                                    </Select>
                                    {props.errors.email_ownage && props.touched.email_ownage ? (
                                        <span className='form-message invalid col'>{props.errors.email_ownage}</span>
                                    ) : (
                                            ''
                                        )}
                            </div>
                        </div>

                        <div className='form-group row container'>

                            <div className='col'>
                                <InputLabel htmlFor='loan_purpose'>Tujuan Pinjaman</InputLabel>

                                <Select name='loan_purpose' id='loan_purpose' placeholder='Tujuan pinjaman'
                                    className='float-right col-12 required'
                                    onChange={props.handleChange}
                                    value={props.values.loan_purpose}>
                                    <option value=''>pilih salah satu</option>
                                    <option value="liburan">liburan</option>
                                    <option value="investasi">investasi</option>
                                    <option value="lainnya">lainnya</option>
                                </Select>
                                {props.errors.loan_purpose && props.touched.loan_purpose ? (
                                    <span className='form-message invalid col'>{props.errors.loan_purpose}</span>
                                ) : (
                                        ''
                                    )}

                            </div>
                        </div>

                        <div className='form-group row container'>

                            <div className='col'>
                                <InputLabel htmlFor='know_tunaiku'>Mengetahui Tunaiku dari</InputLabel>

                                <Select name='know_tunaiku' placeholder='Tujuan pinjaman'
                                    className='float-right col-12 required'
                                    onChange={props.handleChange}
                                    value={props.values.know_tunaiku}>
                                    <option value=''>pilih salah satu</option>
                                    <option value="internet">internet</option>
                                    <option value="teman">teman</option>
                                    <option value="lainnya">lainnya</option>
                                </Select>
                                {props.errors.know_tunaiku && props.touched.know_tunaiku ? (
                                    <span className='form-message invalid col'>{props.errors.know_tunaiku}</span>
                                ) : (
                                        ''
                                    )}

                            </div>

                        </div>
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

export default TestUserForm;