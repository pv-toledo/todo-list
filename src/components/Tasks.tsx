import styles from './Tasks.module.css'

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
        </div>
    )
}