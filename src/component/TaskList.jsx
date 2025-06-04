import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ todos, todoDelete, todoEdit, todoTogal }) => {
    // console.log(deleteTodo())
    return (
        <ul className='h-[50vh] overflow-y-auto'>
            {todos.map((item, indx) => (
                <TaskItem
                    key={indx}
                    index={indx}
                    item={item}
                    todoDeleted={todoDelete}
                    todoEdit={todoEdit}
                    todoTogal={todoTogal}
                />
            ))}
        </ul>
    )
}

export default TaskList
