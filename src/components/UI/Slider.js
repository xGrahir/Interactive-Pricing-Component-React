import styles from './Slider.module.css'
import { useState } from 'react'

const Slider = ({onSliderSwitch}) => {

    const handleCheck = () => {
        onSliderSwitch()
    }
   
    return (
        <label className={styles.switch}>
            <input type="checkbox" onChange={handleCheck}/>
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}

export default Slider