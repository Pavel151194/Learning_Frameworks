import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader'

const PostPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Пост с id = {params.id}</h1>
            {isLoading
                ? <MyLoader/>
                : <div>
                    <p>{post.id}. {post.title}</p>
                    <p>{post.body}</p>
                </div>
                
            }
            <h1>Комментарии</h1>
            {isComLoading
                ? <MyLoader/>
                : <div>
                    {comments.map(comment => 
                        <div style={{marginTop: 15}} key={comment.id}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostPage