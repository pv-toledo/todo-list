import styles from './Tasks.module.css'
import clipboard from '../assets/Clipboard.svg'

export function Tasks () {
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

            <div className={styles.listContainer}>
                <img src={clipboard} alt="Imagem de uma prancheta de anotações" />
                <div className={styles.paragraph}>
                    <p className={styles.firstLine}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.secondLine}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}