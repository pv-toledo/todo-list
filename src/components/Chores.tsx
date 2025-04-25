import styles from './Chores.module.css'
import trash from '../assets/trash.svg'

export function Chores () {
    return (
        <div className={styles.chore}>
            <label htmlFor="checkbox" className={styles.checkboxLabel}>
                <input type="checkbox" id='checkbox' />
                <span className={styles.checkboxSpan}></span>
            </label>
            
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aut voluptatem totam earum doloremque, facilis facere tempora, error, delectus qui vitae adipisci sapiente quam nemo natus! Odio nam dolores ipsam.</span>
            <img src={trash} alt="" />
        </div>
    )
}