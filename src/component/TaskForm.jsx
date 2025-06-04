import React, { useState } from 'react'
import Swal from 'sweetalert2';
const TaskForm = ({ todoAdd }) => {
    const [input, setInput] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        if (input.trim()) {
            todoAdd(input)
            setInput('')
        }
        else {
            Swal.fire({
                // title: "The Internet?",
                text: "Plese enter your task !",
                icon: "error"
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
            <input className='flex-grow p-2 rounded-lg border border-indigo-400' type="text"
                placeholder='Enter a task...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-800'
                type='submit'
            >Add Todo</button>
        </form>
    )
}

export default TaskForm
