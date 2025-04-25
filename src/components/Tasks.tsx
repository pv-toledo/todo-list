import styles from './Tasks.module.css'
import { Empty } from './Empty';
import { TaskType } from '../App';
import { Chores } from './Chores';

export interface TasksProps {
    task: TaskType[]
}

export function Tasks ({task}: TasksProps) {
    return (
        <div className={styles.tasksContainer}>
            <div className={styles.infoContainer}>

                <div className={styles.created}>
                    <span>Tarefas criadas</span>
                    <span className={styles.counter}>0</span>
                </div>

                <div className={styles.done}>
                    <span>Concluídas</span>
                    <span className={styles.counter}>0</span>
                </div>
            </div>

            {task.length === 0
            ? <Empty />
            : task.map(item => {
                return (
                    <Chores
                        chore ={item}
                    />
                )
            })
            
            }
            
            
        </div>
    )
}