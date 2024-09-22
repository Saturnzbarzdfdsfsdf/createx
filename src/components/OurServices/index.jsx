import React from 'react'

import { SvgSelector } from '../SvgSelector'
import ROOM from '../../assets/img/card-rom.jpeg'

import styles from './services.module.scss'

const index = () => {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.top}>
					<h2 className='title'>Our services</h2>
					<p className='text subtitle'>
						Createx Construction Bureau is a construction giant with a full
						range of construction services.
					</p>
				</div>

				<div className={styles.cards}>
					<div className={styles.card}>
						<SvgSelector id='constructor' />
						<h3 className={styles.title}>Construction</h3>
					</div>

					<div className={styles.card}>
						<SvgSelector id='plan' />
						<h3 className={styles.title}>Construction</h3>
					</div>

					<div className={styles.card}>
						<SvgSelector id='painting' />
						<h3 className={styles.title}>Construction</h3>
					</div>

					<div className={styles.cardActive}>
						<img className={styles.room} src={ROOM} alt='room' />
						<SvgSelector id='pantone' />
						<h3 className={styles.title}>Construction</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
