
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './App.module.css'
import { Headbar } from './components/Headbar'
import { Tasks } from './components/Tasks'
import './global.css'

export interface TaskType {
  id: number;
  taskText: string;
  isDone: boolean
}

export function App() {

  const [task, setTasks] = useState<TaskType[]>([])

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement; //Tipando o event.target para afirmar que é um form (para ter a propriedade elements)
    const input = form.elements.namedItem('newTask') as HTMLInputElement; //Tipando para afirmar que é um input de texto e acessar o value

    const newTaskValue = input.value
    const id = task.length + 1;
    const isDone = false; //Para criar a task como incompleta, por padrão

    const newTask = { id: id, taskText: newTaskValue, isDone: isDone };
    input.value = ''
    setTasks([...task, newTask])
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    const checkbox = event.target as HTMLInputElement;

    //Percorre o array de tasks. Quando achar a task com o id que foi marcado no checkbox, altera o valor de isDone. Para os outros itens, apenas repete o que já estava lá. É preciso fazer assim pelo princípio de imutabilidade do react
    const updatedTasks = task.map(item => item.id === parseInt(checkbox.value) ? {... item, isDone: !item.isDone} : item)

    setTasks(updatedTasks)
  }

  return (
    <div className={styles.container}>
      <Headbar
        onCreateNewTask={handleCreateNewTask}
      />
      <Tasks
        task={task}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>

  )
}

