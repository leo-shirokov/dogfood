import { Badge } from '@mantine/core'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import productsContext from '../../context/productsContext'
import BurgerMenu from '../Burger/BurgerMenu'
import Logo from '../Logo/Logo'
import { Search } from '../Search/Search'
import HeaderIndex from './HeaderIndex'
import iconCart from './img/cart.svg'
import iconDog from './img/dog.svg'
import iconLike from './img/favorites.svg'

function Header() {
	const { favourites } = useContext(productsContext)
	const location = useLocation()
	const [hidden, setHidden] = useState(true)

	useEffect(() => {
		const setVisibility = (e) => {
			if (window.innerWidth < 768) setHidden(true)
			else setHidden(false)
		}
		setVisibility()
		window.addEventListener('resize', setVisibility)
	}, [])

	return (
		<>
			<div className='flex h-20 w-full items-center justify-between gap-x-8 bg-yellow-300 px-4 py-10'>
				<div className='md:w-10'>
					<Logo />
				</div>
				{/* поле поиска */}
				<div className='grow'>
					{['/', '/catalog'].includes(location.pathname) && (
						<Search />
					)}
				</div>

				<div className='flex items-center justify-between gap-x-10'>
					{/* включение меню бургер на мобильных устройствах */}
					{hidden ? (
						<BurgerMenu />
					) : (
						<>
							{/* меню в header на больших экранах */}
							<Link to='/favorite' className='relative'>
								{' '}
								<img
									className='w-6'
									src={iconLike}
									alt='favorite'
								/>
								{favourites.length > 0 ? (
									<Badge
										color='green'
										size='xs'
										variant='filled'
										className='absolute -top-2 left-4 border border-yellow-300'
									>
										{favourites.length}
									</Badge>
								) : (
									<></>
								)}
							</Link>
							<Link to='/cart'>
								<img
									className='w-6'
									src={iconCart}
									alt='cart'
								/>
							</Link>
							<Link to='/profile'>
								<img className='w-6' src={iconDog} alt='dog' />
							</Link>
						</>
					)}
				</div>
			</div>
			{location.pathname === '/' && <HeaderIndex />}
		</>
	)
}

export default Header
