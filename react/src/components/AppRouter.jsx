import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContext } from '../context'
import { privateRoutes, publicRoutes } from '../router/routes'
import MyLoader from './UI/loader/MyLoader'

const AppRouter = () => {
    const { isLoading, isAuth } = useContext(AuthContext)

    if (isLoading) {
        return <MyLoader/>
    }

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(route => 
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )
                : publicRoutes.map(route => 
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )
            }
        </Routes>
    )
}

export default AppRouter