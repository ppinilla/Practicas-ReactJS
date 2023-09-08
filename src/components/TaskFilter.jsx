import React from 'react'
import { useState } from 'react'

const TaskFilter = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Tarea 1", completed: false },
        { id: 2, title: "Tarea 2", completed: true },
        { id: 3, title: "Tarea 3", completed: false }
    ])

    const [filter, setFilter] = useState('all')

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    } //Funcion para leer el valor de filtrado

    const handleTaskChange = (taskId) => {
        setTasks((prevTask) => {
            prevTask.map((task) => {
                task.id === taskId ? { ...task, completed: !task.completed } : task //condition ? value1 : value2;
            })
        })
    } //Funcion que verifica el valor de filtrado

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true
        if (filter === 'completed') return task.completed
        if (filter == 'uncompleted') return !task.completed
        return false
    })

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <label>Filtrar por estado</label>
                <select value={filter} onChange={handleFilterChange}>
                    <option value="all">Todas</option>
                    <option value="completed">Completadas</option>
                    <option value="uncompleted">No completadas</option>
                </select>
            </div>
            <div>
                {
                    filteredTasks.map((t) => (
                        <div key={t.id}>
                            <input type="checkbox" checked={t.completed} onChange={() => handleTaskChange(t.id)} />
                            <span>{t.title}</span>
                        </div>
                    ))//informacion de las tareas de acuerdo al filtro
                }
            </div>
        </div>
    )
}

export default TaskFilter