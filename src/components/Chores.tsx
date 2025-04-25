import styles from './Chores.module.css'
import {Trash} from 'phosphor-react'
import { useState } from 'react'
import { TaskType } from '../App';

interface ChoresProps {
    chore: TaskType;
}

export function Chores ({chore}: ChoresProps) {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    function handleCheckboxChange (event: React.ChangeEvent<HTMLInputElement>) {
        setIsChecked(event.target.checked)
    }

    return (
        <div className={styles.chore}>
            <label htmlFor="checkbox" className={styles.checkboxLabel}>
                <input 
                    type="checkbox" 
                    id='checkbox'
                    checked={chore.isDone}
                    onChange={handleCheckboxChange} 
                />
                <span className={styles.checkboxSpan}></span>
            </label>
            
            <span className={isChecked? styles.paragraphChecked : styles.paragraph}>{chore.taskText}</span>
            <button>
                <Trash size={24}/>
            </button>
            
        </div>
    )
}