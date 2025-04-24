import styles from './Headbar.module.css'
import todoLogo from '../assets/rocket.svg'

export function Headbar () {
    return (
        <div className={styles.headbar}>
            <div className={styles.logoContainer}>
                <img src={todoLogo} alt="Foguete, logotipo da todo list" />
                <div>
                    <span className={styles.firstLetters}>to</span>
                    <span className={styles.secondLetters}>do</span>
                </div>
                
            </div>
        </div>
    )
}