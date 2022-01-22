import React, { useContext } from 'react'
import { AuthContext } from '../context'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <form onSubmit={login}>
            <h1>Вход</h1>
            <MyInput type='text' placeholder='логин'/>
            <MyInput type='password' placeholder='пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    )
}

export default Login