import React, { FC, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IUser } from '../types/types'

interface UserItemPageParams {
    id: string
}

const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <p>{user?.email}</p>
            <p>
                {user?.address.city}
                {user?.address.street}
                {user?.address.zipcode}
            </p>
        </div>
    )

}

export default UserItemPage