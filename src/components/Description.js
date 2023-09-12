import styles from './Description.module.css'

const Description = () => {
	return (
		<>
            <div className={styles.bar}></div>
			<div className={styles.wrapper}>
				<div className={styles.text}>
					<p><i class="fa-solid fa-check"></i>Unlimited websites</p>
					<p><i class="fa-solid fa-check"></i>100% data ownership</p>
					<p><i class="fa-solid fa-check"></i>Email reports</p>
				</div>
				<div className={styles.actions}>
					<button>Start my trial</button>
				</div>
			</div>
		</>
	)
}

export default Description
