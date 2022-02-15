import React, { FC, useState, useRef } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' placeholder='controlled'/>
            <input ref={inputRef} type='text' placeholder='uncontrolled'/>
            <button onClick={clickHandler}>Button</button>
            <div draggable
                onDrag={dragHandler}
                style={{width: 200, height: 200, background: 'red', marginBottom: 15}}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red'}}
            ></div>
        </div>
    )
}

export default EventsExample