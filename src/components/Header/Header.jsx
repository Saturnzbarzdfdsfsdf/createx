import React from 'react'

import LOGO from '../../assets/icons/logo.svg'

const navItems = ['About Us', 'Services', 'Work', 'News', 'Contacts']

const Header = () => {
	const [navIndex, setNavIndex] = React.useState(0)

	// const onChangeNavItem = index => {
	// 	setNavIndex(index)
	// }

	return (
		<header className='header'>
			<div className='container header-content'>
				<div className='header__logo'>
					<a href='#' className='logo'>
						<img src={LOGO} alt='logo' />
					</a>
				</div>

				<nav className='nav'>
					<ul className='nav__list'>
						{navItems.map((navValue, index) => (
							<li
								key={index}
								onClick={() => setNavIndex(index)}
								className='nav__list-item'
							>
								<a className={navIndex === index ? 'active' : ''}>{navValue}</a>
							</li>
						))}
					</ul>
				</nav>

				<div className='header__contacts'>
					<div className='header__contacts-call'>
						<p className='call'>Call us</p>
						<a className='phone' href='tel:(405) 555-0128'>
							(405) 555-0128
						</a>
					</div>

					<div className='header__contacts-talk'>
						<p className='talk'>Talk to us</p>
						<a className='post' href='mailto:hello@createx.com'>
							hello@createx.com
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

// <nav className='nav'>
// 		<ul className='nav__list'>
// 			<li className='nav__list-item'>
// 				<a href='#' className='nav__list-link'>
// 					About Us
// 				</a>
// 			</li>
// 			<li className='nav__list-item'>
// 				<a href='#' className='nav__list-link'>
// 					Services
// 				</a>
// 			</li>
// 			<li className='nav__list-item'>
// 				<a href='#' className='nav__list-link'>
// 					Work
// 				</a>
// 			</li>
// 			<li className='nav__list-item'>
// 				<a href='#' className='nav__list-link'>
// 					News
// 				</a>
// 			</li>
// 			<li className='nav__list-item'>
// 				<a href='#' className='nav__list-link'>
// 					Contacts
// 				</a>
// 			</li>
// 		</ul>
// 	</nav>
