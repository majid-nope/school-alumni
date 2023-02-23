
import React, { useState } from 'react'
import style from './Login.module.scss'
import { Button, TextInput } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/async-operations/auth'
import { Link } from 'react-router-dom'


const Login = () => {
    const [field, setFlied] = useState({})
    const [error, setError] = useState([])




    const dispatch = useDispatch()








    const onChange = (e) => {
        setFlied({ ...field, [e.target.name]: e.target.value })
    }
    const onLogin = () => {

        if (field.phone.length < 10) {
            setError(['phone'])
        } else {
            setError([])
        }
        if (!error.length) {
            console.log("hh");
            dispatch(login(field))
        }
    }
    return (
        <div className={style.container}>
            <form action="">
                <TextInput error={error.includes('phone') ? "enter a valid number" : false} label="Phone" name='phone' placeholder='phone' onChange={onChange} />
                <Button color="green" onClick={onLogin}>Login</Button>

                Don't have an account ? <Link style={{ color: "#50a6ff" }} to={'/register'}>Register</Link>



            </form>
        </div>
    )
}

export default Login