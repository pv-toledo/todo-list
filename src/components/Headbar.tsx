import styles from './Headbar.module.css'
import todoLogo from '../assets/rocket.svg'
import plus from '../assets/plus.svg'
import { FormEvent } from 'react'

interface HeadbarProps {
    onCreateNewTask: (event:FormEvent<HTMLFormElement>) => void
}

export function Headbar ({onCreateNewTask}: HeadbarProps) {
   
    return (
        <div className={styles.headbar}>
            <div className={styles.logoContainer}>
                <img src={todoLogo} alt="Foguete, logotipo da todo list" />

                <div>
                    <span className={styles.firstLetters}>to</span>
                    <span className={styles.secondLetters}>do</span>
                </div>

                <div className={styles.inputContainer}>
                    <form onSubmit={onCreateNewTask}>
                        <input type="text" placeholder='Adicione uma nova tarefa' name='newTask'/>
                        <button type='submit'>
                            <span>Criar</span>
                            <img src={plus} alt="Sinal de adicionar" />
                        </button>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

