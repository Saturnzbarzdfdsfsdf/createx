import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination } from 'swiper/modules'

import Sldier from '../Slider/Sldier'

import 'swiper/swiper-bundle.css'

const SwiperSlider = () => {
	return (
		<Swiper
			className='none'
			modules={[Navigation, Pagination]}
			// spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + +1) + '</span>'
				},
			}}
			onSwiper={swiper => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide>
				<div className='slider'>
					<Sldier />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='slider'>
					<Sldier />
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default SwiperSlider
