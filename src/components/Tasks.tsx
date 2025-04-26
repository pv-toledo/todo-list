import styles from './Tasks.module.css'
import { Empty } from './Empty';
import { TaskType } from '../App';
import { Chores } from './Chores';
import { ChangeEvent } from 'react';

export interface TasksProps {
    task: TaskType[];
    onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
    completedTasks: number;
    handleDeleteTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Tasks ({task, onCheckboxChange, completedTasks, handleDeleteTask}: TasksProps) {

    return (

        <div className={styles.tasksContainer}>

            <div className={styles.infoContainer}>

                <div className={styles.created}>
                    <span>Tarefas criadas</span>
                    <span className={styles.counter}>{task.length}</span>
                </div>

                <div className={styles.done}>
                    <span>Concluídas</span>
                    <span className={styles.counter}>{completedTasks} de {task.length}</span>
                </div>
            </div>

            {task.length === 0
            ? <Empty />
            : task.map(item => {
                return (
                    <Chores
                        key={item.id}
                        chore ={item}
                        onCompletingChore = {onCheckboxChange}
                        onDeleteTask = {handleDeleteTask}
                    />
                )
            })
            
            } 
            
            
        </div>
    )
}