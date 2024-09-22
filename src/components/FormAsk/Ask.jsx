const Ask = () => {
	return (
		<section className='ask none'>
			<h3 className='ask__title'>Want to know more? Ask us a question:</h3>

			<form className='ask__form' action=''>
				<div className='input__box'>
					<input className='input' placeholder='' id='name' type='text' />
					<label className='placeholder' htmlFor='name'>
						Your name
					</label>
				</div>

				<div className='input__box'>
					<input className='input' placeholder='' id='phone' type='number' />
					<label className='placeholder' htmlFor='phone'>
						Your phone
					</label>
				</div>

				<div className='input__box'>
					<input className='input' placeholder='' id='massage' type='text' />
					<label className='placeholder' htmlFor='massage'>
						Your message
					</label>
				</div>

				<input id='submit-btn' type='submit' value='send' />
			</form>
		</section>
	)
}

export default Ask
