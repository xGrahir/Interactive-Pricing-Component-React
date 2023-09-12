import styles from './Header.module.css'
import Background from './Background'

const Header = () => {
	return (
		<Background>
			<div className={styles.circles}></div>
			<div className={styles.text}>
				<h1>Simple, traffic-based pricing</h1>
				<div className={styles.about}>
					<p>Sign-up for our 30-day trial.</p>
					<p>No credit card required.</p>
				</div>
			</div>
		</Background>
	)
}

export default Header
