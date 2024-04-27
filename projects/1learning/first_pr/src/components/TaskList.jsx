import React, { useState, useEffect } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setTasks(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError('Error fetching tasks: ' + error.message);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="container mt-5">Cargando...</div>;
    }

    if (error) {
        return <div className="container mt-5">Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Lista de Tareas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
