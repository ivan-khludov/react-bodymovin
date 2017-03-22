import React from 'react'
import styles from './App.css'
import ReactBodymovin from '../../src/ReactBodymovin'
import animation from './animation.json'

const App = () => {
  const bodymovinOptions = {
    animType: 'svg',
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }

  return (
    <div className={styles.app}>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}

export default App
