import styles from './Headbar.module.css'
import todoLogo from '../assets/rocket.svg'
import plus from '../assets/plus.svg'

export function Headbar () {
    return (
        <div className={styles.headbar}>
            <div className={styles.logoContainer}>
                <img src={todoLogo} alt="Foguete, logotipo da todo list" />

                <div>
                    <span className={styles.firstLetters}>to</span>
                    <span className={styles.secondLetters}>do</span>
                </div>

                <div className={styles.inputContainer}>
                    <input type="text" placeholder='Adicione uma nova tarefa'/>
                    <button>
                        <span>Criar</span>
                        <img src={plus} alt="Sinal de adicionar" />
                    </button>
                </div>
                
            </div>
        </div>
    )
}