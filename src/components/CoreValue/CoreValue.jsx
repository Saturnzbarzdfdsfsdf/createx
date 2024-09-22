import { SvgSelector } from '../SvgSelector'

const CoreValue = () => {
	return (
		<section className='core'>
			<div className='core__top none'>
				<h2 className='core__top-title title'>Our core values</h2>
				<p className='core__top-subtitle subtitle'>
					Our mission is to set the highest standards for construction sphere.
				</p>
			</div>

			<div className='core__bottom'>
				<div className='core__bottom-item none'>
					<SvgSelector id='like' />
					<h4 className='core__bottom-subtitle'>Quality</h4>
					<p className='core__bottom-text'>
						Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
						velit nostrud aliquip sunt.
					</p>
				</div>
				<div className='core__bottom-item none'>
					<SvgSelector id='hand' />
					<h4 className='core__bottom-subtitle'>Safety</h4>
					<p className='core__bottom-text'>
						Anim reprehenderit sint voluptate exercitation adipisicing laborum
						adipisicing. Minim empor est ea.
					</p>
				</div>
				<div className='core__bottom-item none'>
					<SvgSelector id='slippers' />
					<h4 className='core__bottom-subtitle'>Comfort</h4>
					<p className='core__bottom-text'>
						Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
						voluptate ullamco proident ea ad.
					</p>
				</div>
			</div>
		</section>
	)
}

export default CoreValue
