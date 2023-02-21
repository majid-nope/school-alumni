import React, { useState } from 'react'
import style from './SignUp.module.scss'
import { Button } from '@mantine/core'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'

import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { PhotoCamera } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/async-operations/auth';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [date, setDate] = useState(dayjs('2014-08-18T21:11:54'))
    const [field, setField] = useState({ class: 7 })
    const [dpPath, setDp] = useState(false)

    const dispatch = useDispatch()

    const onChange = (e, dates) => {

        if (e) {
            console.log(e);

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

    const onRegister = (e) => {
        if (field.file) {
            console.log(field.file);
            delete field.undefined
            const form = new FormData()

            for (let item in field) {
                form.append(item, field[item])

            }


            dispatch(register(form))









        }
    }


    const setPic = (e) => {
        console.log(e.files);
        // const file = new FileReader()
        // file.readAsDataURL(e.target.value)

        setDp(URL.createObjectURL(e.target.files[0]))
        setField({ ...field, file: e.target.files[0] })

    }

    return (
        <div className={style.container}>
            <form action="" method="post">
                <h1>GMUP SCHOOL</h1>
                <TextField name='name' id="outlined-basic" label="Your name" variant="outlined" onChange={onChange} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 50px 0 50px", gap: "12px" }}>
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
                    </div>
                </LocalizationProvider>

                <TextField id="outlined-basic" label="Address" name='address' variant="outlined" onChange={onChange} />
                <TextField id="outlined-basic" label="Parent name" name='parentName' variant="outlined" onChange={onChange} />
                <TextField id="outlined-basic" label="Job" name='job' variant="outlined" onChange={onChange} />
                <TextField id="outlined-basic" label="Phone" name='phone' variant="outlined" onChange={onChange} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 50px 0 50px", gap: "12px" }}>
                    <FormControl sx={{ width: "100px" }} >
                        <InputLabel id="demo-simple-select-label">Class</InputLabel>
                        <Select
                            name='class'
                            labelId="demo-simple-select-label"
                            value={field.class ? field.class : 7}
                            label="Class"
                            onChange={(e) => setField({ ...field, [e.target.name]: e.target.value })}
                        >
                            {Array(7).fill().map((el, index) => (<MenuItem value={index + 1}>{index + 1}</MenuItem>))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ width: "100px" }} >
                        <InputLabel id="demo-simple-select-label">Division</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            name='division'
                            value={field?.division}
                            label="Division"
                            onChange={(e) => setField({ ...field, [e.target.name]: e.target.value })}
                        >
                            <MenuItem value={'A'}>A</MenuItem>
                            <MenuItem value={"B"}>B</MenuItem>
                            <MenuItem value={'C'}>C</MenuItem>
                            <MenuItem value={'D'}>D</MenuItem>
                        </Select>
                    </FormControl>
                </div>


                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="gender"

                        onChange={onChange}

                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />

                    </RadioGroup>
                </FormControl>
                <FormControl sx={{ alignItems: "center" }}>
                    <FormLabel id="demo-row-radio-buttons-group-label">Choose your photo</FormLabel>

                    {dpPath
                        ?
                        <>
                            <img width="50px" src={dpPath} alt='upload' />
                            <IconButton aria-label="delete" size="small" onClick={() => setDp(false)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </>
                        :
                        <IconButton sx={{ color: "#1e1e1e", aspectRatio: "1/1" }} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={setPic} />
                            <PhotoCamera />
                        </IconButton>
                    }
                </FormControl>
                <Button onClick={onRegister}>Join</Button> <Link to={'/login'}>I already have a account</Link>
            </form>
        </div >
    )
}

export default SignUp