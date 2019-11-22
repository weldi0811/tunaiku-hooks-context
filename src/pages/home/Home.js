import React, { useState } from 'react';
import Slider2 from './Slider2';
import UserForm from './UserForm';
import LoanDetailProvider from '../../context/LoanDetailsContext';
import ProfileProvider from '../../context/ProfileContext';


const Home = () => {


    const HomeText = () => {
        return (
            <div className='col col-sm col-m col-l mx-auto text-white padding-home m-5'>
                <h1 style={{ fontSize: '50px' }}>Ajukan Pinjaman Tanpa Agunan di Tunaiku</h1>
                <h4>Pinjaman Online Tanpa Jaminan
                        Rp2 - 20 Juta Syarat KTP Saja!</h4>
                <h5 className='font-small'>Tunaiku merupakan produk Amar Bank yang terdaftar dan diawasi OJK sejak 2014</h5>
                {/* <button type='button' className='btn btn-light m-1'>
                    <img src={amarBank} alt='amarbank' style={{ width: "120px", height: "60px" }}></img>
                </button>
                <button type='button' className='btn btn-light m-1'>
                    <img src={ojk} alt='ojk' style={{ width: "120px", height: "60px" }}></img>
                </button>

                <h5>Penghargaan yang telah diraih <h5 className='font-weight-bold'>Tunaiku - Amar Bank</h5></h5>
                <img src={banking} alt='banking' style={{ height: "80px" }} className='m-2'></img>
                <img src={topbank} alt='top bank' style={{ height: "80px" }} className='m-2'></img>
                <img src={bankaward} alt='bank award' style={{ height: "80px" }} className='m-2'></img> */}

            </div>
        )
    }

    const [step, setStep] = useState(1)

    if (step === 1) {
        return (
            <div>
                <div className='container'>
                    <div className='custom-bg'>
                        <div className='row container'>
                            {HomeText()}
                            <div className='col col-m col-sm col-l m-2 card'>
                                {/* <LoanDetailProvider > */}
                                    <Slider2 />
                                {/* </LoanDetailProvider> */}
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
            <div>
                <div className='container'>
                    <div className='custom-bg'>
                        <div className='row container'>
                            {HomeText()}
                            <div className='col m-5 card'>
                                {/* <ProfileProvider> */}
                                    <UserForm />
                                {/* </ProfileProvider> */}
                                    <div className='container row'>
                                    <button
                                        type='button'
                                        className='btn btn-outline-success btn-go'
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
        )
    }
}

export default Home