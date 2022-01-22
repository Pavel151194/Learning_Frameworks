import { Navigate } from 'react-router-dom'
import About from "../pages/About";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    { path: '/about', element: <About/>, exact: true },
    { path: '/posts', element: <Posts/>, exact: true },
    { path: '/posts/:id', element: <PostPage/>, exact: true },
    { path: '*', element: <Navigate to='/posts'/>, exact: true }  
]

export const publicRoutes = [
    { path: '/login', element: <Login/>, exact: true },
    { path: '*', element: <Navigate to='/login'/>, exact: true }
]