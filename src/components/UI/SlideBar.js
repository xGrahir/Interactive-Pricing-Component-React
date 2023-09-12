import styles from './SlideBar.module.css'
import { useState } from 'react'

const Input = ({onSlideChange}) => {
	let style = {
		background: 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%, #eef2fb 50%, #eef2fb 100%)',
	}

	const [barFill, changeBarFill] = useState(style) //in which % bar is filled with color (from 0 to thumb)
	const [barValue, changeBarValue] = useState(2) //current value of input

	const changeHandler = e => {
		let value = e.target.value * 25

		style = {
			background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, #eef2fb ${value}%, #eef2fb 100%)`,
		}

		changeBarFill(style)
		changeBarValue(e.target.value)

		onSlideChange(e.target.value)
	}

	return (
		<input
			type='range'
			min={0}
			max={4}
			value={barValue}
			step={1}
			style={barFill}
			onChange={changeHandler}
			className={styles.input}
		/>
	)
}

export default Input
