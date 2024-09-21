import bgImgWe from '../../assets/img/bg-video.png'

const WeCreatex = () => {
	return (
		<section className='createx'>
			<div className='container'>
				<div className='createx__desc'>
					<h2 className='createx__desc-title title'>
						We are Createx Construction Bureau{' '}
					</h2>
					<p className='createx__desc-text subtitle'>
						We are rightfully considered to be the best construction company in
						the USA.
					</p>
				</div>

				<div className='createx__video'>
					<img src={bgImgWe} alt='' />
					<div className='createx__overlay'></div>
					<a href='#' className='createx__video-play'></a>
					<a href='#' className='createx__video-sound'></a>
				</div>
			</div>
		</section>
	)
}

export default WeCreatex
