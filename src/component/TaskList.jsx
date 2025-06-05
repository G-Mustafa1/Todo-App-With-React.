import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ todos, todoDelete, todoEdit, todoTogal }) => {
    // console.log(deleteTodo())
    return (
        <ul className='h-[50vh] overflow-y-auto'>
            {
                todos.length === 0 ? (
                <p className='text-center text-gray-500'>No tasks added yet ⏳</p>
            ) : (
                    todos.map((item, indx) => (
                        <TaskItem
                            key={indx}
                            index={indx}
                            item={item}
                            todoDeleted={todoDelete}
                            todoEdit={todoEdit}
                            todoTogal={todoTogal}
                        />
                    ))
                )
            }
        </ul>
    )
}

export default TaskList
