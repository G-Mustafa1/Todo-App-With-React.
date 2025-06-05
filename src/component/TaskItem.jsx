import React from 'react'

const TaskItem = ({ item, index, todoDeleted, todoEdit, todoTogal }) => {

    console.log(item, index)
    return (
        <li className={`flex flex-col mb-2.5 p-3 rounded-lg ${item.completed ? 'bg-green-200 line-through' : 'bg-yellow-100'}`}>
            <div className='flex justify-between '>
                <span onClick={() => todoTogal(index) } className='cursor-pointer text-lg flex '>{item.value}</span>
                <div className='flex gap-2 ml-2'>
                    <button
                    onClick={() => todoEdit(index)}
                        // onClick={() => todoEdit(index)}
                        className='bg-blue-500 text-white px-2 py-1 rounded text-sm outline-none'>✏️</button>
                    <button
                        onClick={() => todoDeleted(index)}
                        className='bg-red-500 text-white px-2 py-1 rounded text-sm outline-none'>🗑️</button>
                </div>
            </div>
            <span className='text-sm text-gray-600 mt-1'>🕒 {item.addTime}</span>
        </li>
    )
}

export default TaskItem
