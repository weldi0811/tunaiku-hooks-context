import React, { Fragment, useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'


const TestDatepicker = (props) => {

    const [selectedDate, handleDateChange] = useState(new Date())

    return (
        <Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    disableFuture
                    openTo="year"
                    format="dd/MM/yyyy"
                    label="Date of birth"
                    views={["month", "date", "year"]}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
                <span>{console.log(selectedDate)}</span>
            </MuiPickersUtilsProvider>
        </Fragment>
    );
}

export default TestDatepicker;