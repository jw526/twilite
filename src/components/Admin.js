import React from 'react';
class Admin extends React.Component {
    state = {
      tasks: []
    };

    handleAdd = event => {
        event.preventDefault();
      
        const text = this.input.value.trim();
        if (!text) {
          return;
        }
      
        fetch('http://localhost:3001/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text, completed: false })
        })
          .then(response => response.json())
          .then(task => {
            this.setState({ tasks: [...this.state.tasks, task] });
            this.input.value = '';
          });
      }

      handleDelete = taskToDelete => {
        fetch(`http://localhost:3001/tasks/${taskToDelete.id}`, {
          method: 'DELETE'
        })
          .then(() => {
            const tasks = this.state.tasks.filter(task => task.id !== taskToDelete.id);
            this.setState({ tasks });
          });
      }
      
      handleComplete = taskToComplete => {
        fetch(`http://localhost:3001/tasks/${taskToComplete.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ completed: !taskToComplete.completed })
        })
          .then(response => response.json())
          .then(updatedTask => {
            const tasks = this.state.tasks.map(task => {
              if (task.id === updatedTask.id) {
                return updatedTask;
              } else {
                return task;
              }
            });
            this.setState({ tasks });
          });
      }
      
      
  
    componentDidMount() {
      fetch('http://localhost:3001/tasks')
        .then(response => response.json())
        .then(tasks => this.setState({ tasks }));
    }
  
    render() {
        const { tasks } = this.state;
        return (
            <div className='admin-task'>
            <form onSubmit={this.handleAdd}>
                <input type="text" ref={el => this.input = el} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {tasks.map(task => (
                <li key={task.id} style={{ color: task.completed ? 'green' : 'red' }}>
                    {task.completed ? 'Completed' : task.text}
                    <button onClick={() => this.handleComplete(task)}>{task.completed ? 'Undo' : 'Complete'}</button>
                    <button onClick={() => this.handleDelete(task)}>Delete</button>
                </li>
                ))}
            </ul>
            </div>
        );
    }

  }
  


export default Admin;