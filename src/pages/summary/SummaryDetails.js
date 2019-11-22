import React, { useContext } from 'react';
import { LoanDetailContext } from '../../context/LoanDetailsContext';
import { ProfileContext } from '../../context/ProfileContext';
import {Link} from 'react-router-dom'

const SummaryDetails = () => {


    const {loanDetails} = useContext(LoanDetailContext)
    const {profile,birthInfo} = useContext(ProfileContext)
    const { loanAmount, loanPeriod, loanInstallment } = loanDetails
    const { name, email, phone, id_number } = profile
    const {birthDay, birthMonth, birthYear} = birthInfo


    console.log(profile)
    console.log(birthInfo)
    console.log(loanDetails)
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
                    <h3>No Handphone : {phone}</h3>
                    <h3>Email : {email}</h3>
                    <h3>Jumlah Pinjaman : Rp {loanAmount}.000.000,-</h3>
                    <h3>Periode Pengembalian : {loanPeriod} bulan</h3>

                    <h3>Tanggal Lahir : {birthDay} {birthMonth} {birthYear}</h3>

                </div>
                <Link to='/' className='card-body text-center btn btn-success btn-go'>
                    <a href='/'><button className='btn btn-success btn-go'>Home </button></a>
                </Link>


            </div>

        </div>
    );
}

export default SummaryDetails;