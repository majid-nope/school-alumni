import { TextField } from '@mui/material'
import React, { useState } from 'react'
import style from './Login.module.scss'
import { Button } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/async-operations/auth'
import { Link } from 'react-router-dom'

const Login = () => {
    const [field, setFlied] = useState({})
    const dispatch = useDispatch()
    const onChange = (e) => {
        setFlied({ ...field, [e.target.name]: e.target.value })
    }
    const onLogin = () => {
        dispatch(login(field))
    }
    return (
        <div className={style.container}>
            <form action="">
                <TextField id="outlined-basic" label="Phone" name='phone' variant="outlined" onChange={onChange} />
                <Button color="green" onClick={onLogin}>Login</Button>
                Don't have an account ? <Link style={{color:"#50a6ff"}} to={'/register'}>Register</Link>

            </form>
        </div>
    )
}

export default Login