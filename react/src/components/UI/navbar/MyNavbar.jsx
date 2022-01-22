import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'
import classes from './MyNavbar.module.css'

const MyNavbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <div className='navbar_links'>
                <Link to='/about'>Info</Link>
                <Link to='/posts'>Посты</Link>
            </div>
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>
    )
}

export default MyNavbar