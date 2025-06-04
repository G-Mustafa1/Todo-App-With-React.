import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'
import TaskForm from './component/TaskForm'
import TaskList from './component/TaskList'
import Swal from 'sweetalert2'
import './App.css'

function App() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('Todos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    const hy = localStorage.setItem('Todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(value) {
    console.log(value, 'val')
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString();
    const fullTime = `${time}, ${date}`;

    setTodos(
      [...todos, { value, completed: false, addTime: fullTime }]
    )
  }

  function deleteTodo(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(
          todos.filter((item, index) => index !== id)
        )
        Swal.fire({
          title: "Deleted!",
          text: "The task has been deleted.",
          icon: "success"
        });
      }
    });
  }
  function editTodo(id) {
    Swal.fire({
      title: 'Edit Task',
      input: 'text',
      inputLabel: 'Enter the new task text',
      inputValue: todos[id].value, 
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (!value) {
          return 'Task cannot be empty!';
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = [...todos];
        updated[id].value = result.value;
        setTodos(updated);

        Swal.fire('Updated!', 'The task has been updated.', 'success');
      }
    });
  }
  function togalTodo(id){
    const updated = [...todos]
    updated[id].completed = ! updated[id].completed;
    setTodos(updated)
  }
  return (
    <div className='bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 h-screen flex items-center justify-center p-4'>
      <div className='bg-white w-full max-w-md p-6 rounded-xl shadow-2xl'>
        <Header />
        <TaskForm todoAdd={addTodo} />
        <TaskList
          todos={todos}
          todoDelete={deleteTodo}
          todoEdit={editTodo}
          todoTogal={togalTodo}
        />
      </div>
    </div>
  )
}

export default App
