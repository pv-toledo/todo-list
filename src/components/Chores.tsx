import styles from './Chores.module.css'
import {Trash} from 'phosphor-react'
import { ChangeEvent } from 'react'
import { TaskType } from '../App';

interface ChoresProps {
    chore: TaskType;
    onCompletingChore: (event: ChangeEvent<HTMLInputElement>) => void;
    onDeleteTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Chores ({chore, onCompletingChore, onDeleteTask}: ChoresProps) {

    return (
        <div className={styles.chore}>
            <label htmlFor={String(chore.id)} className={styles.checkboxLabel}>
                <input 
                    type="checkbox" 
                    id={String(chore.id)}
                    checked={chore.isDone}
                    onChange={onCompletingChore}
                    value={chore.id}
                />
                <span className={styles.checkboxSpan}></span>
            </label>
            
            <span className={chore.isDone? styles.paragraphChecked : styles.paragraph}>{chore.taskText}</span>
            <button data-id={chore.id} onClick={onDeleteTask}>
                <Trash size={24}/>
            </button>
            
        </div>
    )
}