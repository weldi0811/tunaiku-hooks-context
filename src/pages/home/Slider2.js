import React, { useContext } from 'react';
import { LoanDetailContext } from '../../context/LoanDetailsContext'
import { Slider } from '@material-ui/core'

const Slider2 = () => {


    const { loanDetails, setLoanDetails } = useContext(LoanDetailContext)
    const { loanAmount, loanPeriod, loanInstallment } = loanDetails

    const loanAmountMarks = [
        { value: 2, label: 2 },
        { value: 20, label: 20 }
    ]

    const loanPeriodMarks = [
        { value: 6, label: 6 },
        { value: 20, label: 20 }
    ]

    const calculateInstallments = () => {
        const convertRupiah = `/\d(?=(\d{3})+\.)/g, '$&,' `

        let monthlyPayment = parseInt(loanAmount * 1000000 / loanPeriod)
        let monthlyInterest = parseInt(monthlyPayment * 0.23)
        let installment = (monthlyPayment + monthlyInterest).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')

        return installment
    }

    const handleLoanAmountChange = (event, value) => {
        setLoanDetails({ ...loanDetails, loanAmount: value, loanInstallment: calculateInstallments() })
        console.log(loanDetails)
    }


    const handleLoanPeriodChange = (event, value) => {
        setLoanDetails({ ...loanDetails, loanPeriod: value, loanInstallment: calculateInstallments() })
    }


    const renderLoanAmountSlider = () => {
        return (
            <div>
                <h5>Jumlah Pinjaman : Rp {loanAmount} juta ,-</h5>
                <Slider
                    step={1}
                    min={2}
                    max={20}
                    marks={loanAmountMarks}
                    onChange={handleLoanAmountChange} />
            </div>
        )
    }
    const renderLoanPeriodSlider = () => {
        return (
            <div>
                <h5>Lama Pinjaman : {loanPeriod} bulan</h5>
                <Slider
                    step={1}
                    min={6}
                    max={20}
                    marks={loanPeriodMarks}
                    onChange={handleLoanPeriodChange} />
            </div>
        )
    }


    return (
        <div>
            <div className='card-body row text-white bg-card'>
                <h5 className='col float-left' style={{ fontSize: '20px' }}>Cicilan : </h5>
                <div className='float-right'>
                    <h2>Rp {loanInstallment},-</h2> <br></br>
                    <span className='float-right'>per bulan</span>
                </div>
            </div>

            <div className='card-body col-12'>
                {renderLoanAmountSlider()}
            </div>
            <div className='card-body col-12'>
                {renderLoanPeriodSlider()}
            </div>


        </div>
    );
}

export default Slider2;