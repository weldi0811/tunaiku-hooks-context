import React, { useContext } from 'react';
import ApplyFormProvider, { ApplyFormContext } from '../../context/ApplyFormContext';
import {Link} from 'react-router-dom'
import moment from 'moment'


const TestSummary = () => {

    const{profile, birthInfo, loanInfo, selectedDate} = useContext(ApplyFormContext)
    const {name,phone,email,id_number} = profile
    const {gender} = birthInfo
    const {loanAmount, loanPeriod, loanInstallment} = loanInfo

    console.log(typeof(selectedDate))

    return (
        <div className='container'>
        <h1 className='text-center'>Rangkuman Peminjam</h1>
        <div className='card row'>
            <div className='card-header custom-bg text-white'>
                <h1 className='float-right'>Jumlah Angsuran : Rp {loanInstallment} ,-</h1>
            </div>
            <div className='card-body'>
                <h3>No KTP : {id_number}</h3>
                <h3>Nama Lengkap : {name}</h3>
                <h3>No Handphone : +62{phone}</h3>
                <h3>Email : {email}</h3>
                <h3>Jumlah Pinjaman : Rp {loanAmount}.000.000,-</h3>
                <h3>Periode Pengembalian : {loanPeriod} bulan</h3>

                <h3>Tanggal Lahir : {moment(selectedDate).format('D MMMM YYYY')}</h3>
                <h3>Jenis Kelamin : {gender} </h3>

            </div>
            <Link to='/' className='card-body text-center btn btn-success btn-go'>
                <a href='/'><button className='btn btn-success btn-go'>Home </button></a>
            </Link>


        </div>

    </div>
    );
}
 
export default TestSummary;