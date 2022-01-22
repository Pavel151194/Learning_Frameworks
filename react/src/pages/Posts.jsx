import React, { useState, useEffect } from 'react'

import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'

import PostService from '../API/PostService'
import { getPageCount } from '../utils/pagination'

import MyModal from '../components/UI/modal/MyModal'
import MyLoader from '../components/UI/loader/MyLoader'
import MyButton from '../components/UI/button/MyButton'
import MyPagination from '../components/UI/pagination/MyPagination'

import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import MySelect from '../components/UI/select/MySelect'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)

    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    }, [])

    useEffect(() => {
        fetchPosts(limit, page)
    }, [limit])
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <MyButton onClick={() => setModal(true)}>
            Создать пост
        </MyButton>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <MySelect
            value={limit}
            defaultValue={'Кол-во постов'}
            options={[
                { value: 5, name: '5' },
                { value: 10, name: '10' },
                { value: -1, name: 'Показать все' },
            ]}
            onChange={value => setLimit(value)}
        />
        {postError &&
            <h1>Произошла ошибка {postError}</h1>
        }
        {isPostsLoading
            ?<MyLoader/>
            :<PostList
            posts={sortedAndSearchedPosts}
            title='Список постов'
            remove={removePost}
            />
        }
        <MyPagination
            page={page}
            changePage={changePage}
            totalPages={totalPages}
        />
        </div>
    )
}

export default Posts