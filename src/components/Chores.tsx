import styles from './Chores.module.css'
import trash from '../assets/trash.svg'
import { useState } from 'react'

export function Chores () {

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
                    checked={isChecked}
                    onChange={handleCheckboxChange} 
                />
                <span className={styles.checkboxSpan}></span>
            </label>
            
            <span className={isChecked? styles.paragraphChecked : styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aut voluptatem totam earum doloremque, facilis facere tempora, error, delectus qui vitae adipisci sapiente quam nemo natus! Odio nam dolores ipsam.</span>
            <img src={trash} alt="" />
        </div>
    )
}