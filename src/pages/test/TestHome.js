import React, { useState, useContext } from 'react';
import TestUserForm from './TestUserForm';
import TestSlider from './TestSlider';
import amarBank from '../../assets/amarbank-logo-3x.webp'
import banking from '../../assets/best-banking-award.webp'
import topbank from '../../assets/logo-top-bank-2019@2x.webp'
import bankaward from '../../assets/logo-infobank-award-2019@2x.webp'
import ojk from '../../assets/ojk.webp'
import money from '../../assets/money.svg'
import calenderCheck from '../../assets/calendar-check.svg'
import calendarFlip from '../../assets/calendar-flip.svg'
import { ApplyFormContext } from '../../context/ApplyFormContext';



const TestHome = () => {

    const { loanInfo } = useContext(ApplyFormContext)
    const { loanAmount, loanPeriod, loanInstallment } = loanInfo

    const HomeText = () => {
        return (

            <div className='col col-sm col-m col-l mx-auto text-white padding-home m-5'>
                <h1 style={{ fontSize: '50px' }}>Ajukan Pinjaman Tanpa Agunan di Tunaiku</h1>
                <h4>Pinjaman Online Tanpa Jaminan
                        Rp2 - 20 Juta Syarat KTP Saja!</h4>
                <h5 className='font-small'>Tunaiku merupakan produk Amar Bank yang terdaftar dan diawasi OJK sejak 2014</h5>
                <button type='button' className='btn btn-light m-1'>
                    <img src={amarBank} alt='amarbank' style={{ width: "120px", height: "60px" }}></img>
                </button>
                <button type='button' className='btn btn-light m-1'>
                    <img src={ojk} alt='ojk' style={{ width: "120px", height: "60px" }}></img>
                </button>

                <h5>Penghargaan yang telah diraih <span className='font-weight-bold'>Tunaiku - Amar Bank</span></h5>
                <img src={banking} alt='banking' style={{ height: "80px" }} className='m-2'></img>
                <img src={topbank} alt='top bank' style={{ height: "80px" }} className='m-2'></img>
                <img src={bankaward} alt='bank award' style={{ height: "80px" }} className='m-2'></img>

            </div>

        )
    }

    const loanCard = () => {
        return (
            <div className='mx-auto'>
                <div className='card-body'>
                    <div>
                        <img src={money} alt='money' style={{ height: '25px' }} className='float-left m-2'></img>
                        <p>Jumlah Pinjaman</p>
                        <h4>Rp{loanAmount}.000.000,-</h4>
                    </div>
                </div>
                <div className='card-body'>
                    <div>
                        <img src={calendarFlip} alt='flip' style={{ height: '25px' }} className='float-left m-2'></img>
                        <p>Lama Pinjaman</p>
                        <h4>{loanPeriod} Bulan</h4>
                    </div>
                </div>
                <div className='card-body'>
                    <div>
                        <img src={calenderCheck} alt='check' style={{ height: '25px' }} className='float-left m-2'></img>
                        <p>Cicilan per bulan mulai dari</p>
                        <h4>Rp{loanInstallment}</h4>
                    </div>
                </div>
            </div>
        )
    }

    const [step, setStep] = useState(1)


    if (step === 1) {
        return (
            <div className='container'>
                <div className='custom-bg'>
                    <div className='row'>
                        {HomeText()}
                        <div className='col my-5 mx-3'>
                            <div className='col col-m col-sm card shadow'>
                                <TestSlider />
                                <button
                                    type='button'
                                    className='btn btn-success btn-go my-2'
                                    style={{ height: '40px' }}
                                    onClick={() => setStep(step + 1)}>
                                    Ajukan Pinjaman
                                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (step === 2) {
        return (
            <div className=' custom-bg2'>
                <div className='container'>
                    <div>
                        <h1 style={{ fontSize: '35px' }} className='text-center'>FORMULIR PENDAFTARAN</h1>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='col-lg-4 col-xs-12 col-sm-4' >
                                <div className='my-5 mx-2 card shadow'>
                                    {loanCard()}
                                </div>
                            </div>

                            <div className='col-lg col-xs-12 col-sm-8'>
                                <div className='my-5 mx-3 card shadow'>
                                    <TestUserForm />
                                    <div className='container'>
                                        <button
                                            type='button'
                                            className='btn btn-outline-success btn-go col-3 mb-3'
                                            style={{ height: '40px' }}
                                            onClick={() => setStep(1)}>
                                            kembali
                                    </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestHome;