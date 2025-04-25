import clipboard from '../assets/Clipboard.svg'
import styles from './Empty.module.css'

export function Empty() {
    return (
        <div className={styles.listContainer}>
            <img src={clipboard} alt="Imagem de uma prancheta de anotações" />
            <div className={styles.paragraph}>
                <p className={styles.firstLine}>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.secondLine}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}