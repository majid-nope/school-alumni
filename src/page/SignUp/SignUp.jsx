import React, { useState } from 'react'
import style from './SignUp.module.scss'
import { Button } from '@mantine/core'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { DatePicker } from '@mantine/dates';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const SignUp = () => {
    const [showPassword, onShowPassword] = useState(true);
    const handleClickShowPassword = () => onShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [date, setDate] = useState(dayjs('2014-08-18T21:11:54'))
    const [field, setField] = useState({})

    const onChange = (e, dates) => {


        if (e) {
            console.log(e.target);
            setField({ ...field, [e.target.name]: e.target.value })
        }
        if (dates) {
            setField({ ...field, [dates.name]: dates.value })
            console.log(dates);

        }

    };
    const onDate = (dateValue) => {
        setDate(dateValue)
    }

    const onLogin = (e) => {
        console.log(e);
        console.log(field);
    }
    return (
        <div className={style.container}>
            <form action="" method="post">
                <h1>GMUP SCHOOL</h1>
                <TextField name='name' id="outlined-basic" label="Your name" variant="outlined" onChange={onChange} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker

                        label="Pass Out Year"
                        inputFormat="YYYY"
                        value={date}
                        onChange={onDate}
                        onAccept={(e) => onChange(null, { name: "passOut", value: e.$y })}
                        renderInput={(params) => < TextField   {...params} />}
                    />
                    <MobileDatePicker

                        label="Date of Birth"
                        inputFormat="MM/DD/YYYY"
                        value={date}
                        onChange={onDate}
                        onAccept={(e) => onChange(null, { name: "DoB", value: e.$d })}
                        renderInput={(params) => < TextField   {...params} />}
                    />
                </LocalizationProvider>

                <TextField id="outlined-basic" label="Address" name='address' variant="outlined" onChange={onChange} />
                <TextField id="outlined-basic" label="Parent name" name='parentName' variant="outlined" onChange={onChange} />
                <Button onClick={onLogin}>Join</Button>
            </form>
        </div>
    )
}

export default SignUp