
import { useState } from 'react';
import styles from './App.module.css'
import { Headbar } from './components/Headbar'
import { Tasks } from './components/Tasks'
import './global.css'

export interface TaskType {
  id: number;
  taskText: string;
  isDone: boolean
}

// {id:1, taskText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa eaque iure necessitatibus nisi ipsam aut nihil, quasi debitis animi, quis sunt quae. Dolore soluta magnam delectus suscipit corporis maiores animi.', isDone:false}
export function App() {

  const [task, setTasks] = useState<TaskType[]>([{id:1, taskText:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa eaque iure necessitatibus nisi ipsam aut nihil, quasi debitis animi, quis sunt quae. Dolore soluta magnam delectus suscipit corporis maiores animi.', isDone:true}])

  return (
    <div className={styles.container}>
      <Headbar />
      <Tasks
        task = {task}
      />
    </div>

  )
}

