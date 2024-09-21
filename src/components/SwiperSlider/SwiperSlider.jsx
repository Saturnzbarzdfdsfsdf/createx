import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import Sldier from '../Slider/Sldier'

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const SwiperSlider = () => {
	return (
		<Swiper
	      // install Swiper modules
      // modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
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
