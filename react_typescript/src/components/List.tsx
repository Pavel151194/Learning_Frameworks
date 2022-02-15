import React, { FC } from 'react'
import { IUser } from '../types/types'

interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}