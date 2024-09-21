// import React from 'react'

// import './scss/app.scss'

import { Header, SwiperSlider } from './components/index'
import { Home } from './page/index'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<SwiperSlider/>
				<Home/>
				<div className='container'>
				</div>
			</div>
		</div>
	)
}

export default App
