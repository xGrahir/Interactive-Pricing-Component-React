import styles from './Billing.module.css'
import Card from '../components/UI/Card'
import Slider from '../components/UI/Slider'
import SlideBar from '../components/UI/SlideBar'
import Description from './Description'
import { useState, useEffect } from 'react'

const Billing = () => {
	const [numOfViews, changeNumOfViews] = useState('100K')
	const [price, changePrice] = useState(16)
	const [sliderChecked, changeSliderChecked] = useState(false) //discount ON/OFF
	const [sliderIsTouched, changeSliderIsTouched] = useState(false) // prevent useEffect to execute else statement on the first time page reload
	const paramsOfOffer = [
		['10K', 8],
		['50K', 12],
		['100K', 16],
		['500K', 24],
		['1M', 36],
	]

	const sliderIsCheckedHandler = () => {
		changeSliderChecked(prev => !prev)

		changeSliderIsTouched(true)
	}

	const valueOfSlideBarHandler = rangeValue => {
		let currentValue = paramsOfOffer[rangeValue]
		changeNumOfViews(currentValue[0])
		if (sliderChecked) {
			//if discount is ON
			changePrice(currentValue[1] - currentValue[1] * 0.25) // -25%
		} else {
			changePrice(currentValue[1])
		}
	}

	useEffect(() => {
		if (sliderChecked) {
			changePrice(prev => prev - prev * 0.25)
		} else if (sliderIsTouched) {
			changePrice(prev => (prev * 100) / 75)
		}
	}, [sliderChecked])

	return (
		<Card>
			<div className={styles.views}>
				<h2>{numOfViews} Pageviews</h2>
				<SlideBar onSlideChange={valueOfSlideBarHandler} />
				<p>
					<span>${price}.00</span>/month
				</p>
			</div>
			<div className={styles.viewshigh}>
				<div className={styles.viewshighpanel}>
					<h2>{numOfViews} Pageviews</h2>
					<p>
						<span>${price}.00</span>/month
					</p>
				</div>
				<SlideBar onSlideChange={valueOfSlideBarHandler} />
			</div>
			<div className={styles.checkboxpanel}>
				<div className={styles.billing}>
					<p>Monthly Billing</p>
					<div>
						<Slider onSliderSwitch={sliderIsCheckedHandler} />
					</div>
					<p>Yearly Billing</p>
					<p className={styles.percentage}>-25%</p>
					<p className={`${styles.percentagehigh} ${styles.percentage}`}>-25% discount</p>
				</div>
			</div>
			<Description></Description>
		</Card>
	)
}

export default Billing
