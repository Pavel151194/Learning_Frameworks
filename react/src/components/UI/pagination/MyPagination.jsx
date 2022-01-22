import React from 'react'
import { getPagesArray } from '../../../utils/pagination'
import classes from './MyPagination.module.css'

const MyPagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='pagination_wrapper'>
            {pagesArray.map(p => 
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page_current' : 'page'}
                >{p}</span>
            )}
        </div>
    )
}

export default MyPagination