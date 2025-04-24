import styles from './App.module.css'

import { Headbar } from './components/headbar'
import { Tasks } from './components/Tasks'
import './global.css'

export function App() {


  return (
    <div className={styles.container}>
      <Headbar />
      <Tasks />
    </div>

  )
}

