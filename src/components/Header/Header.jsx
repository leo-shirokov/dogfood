import { Badge } from '@mantine/core'
import { useEffect, useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { GrFavorite } from 'react-icons/gr'
import { TbUser } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts'
import useUser from '../../hooks/useUser'
import BurgerMenu from '../Burger/BurgerMenu'
import Logo from '../Logo/Logo'
import { Search } from '../Search/Search'
import HeaderSecondLevel from './HeaderSecondLevel'

function Header() {
	const location = useLocation()
	const [hidden, setHidden] = useState(true)
	const { user } = useUser()

	useEffect(() => {
		const setVisibility = (e) => {
			if (window.innerWidth < 768) setHidden(true)
			else setHidden(false)
		}
		setVisibility()
		window.addEventListener('resize', setVisibility)
	}, [])

	const { favourites } = useProducts()
	const { cartItems, totalItems } = useCart()

	return (
		<>
			<div className='flex h-20 w-full shrink-0 grow-0 basis-auto items-center justify-between gap-x-8 bg-yellow-300 px-4 py-10'>
				<div className='md:w-10'>
					<Logo />
				</div>
				<div className='grow'>
					{['/', '/catalog'].includes(location.pathname) && (
						<Search />
					)}
				</div>

				<div className='flex items-center justify-between gap-x-7'>
					{/* включение меню бургер на мобильных устройствах */}
					{hidden ? (
						<BurgerMenu />
					) : (
						<>
							{/* меню в header на больших экранах */}
							<Link to='/favorite' className='relative'>
								{' '}
								<p className='text-2xl'>{<GrFavorite />}</p>
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
							<Link to='/cart' className='relative'>
								<p className='text-2xl'>{<BsCart4 />}</p>
								{cartItems.length > 0 ? (
									<Badge
										color='green'
										size='xs'
										variant='filled'
										className='absolute -top-2 left-4 border border-yellow-300'
									>
										{totalItems}
									</Badge>
								) : (
									<></>
								)}
							</Link>
							<Link
								to={
									user?.data?._id === 0
										? '/profile/auth'
										: '/profile'
								}
							>
								<p className='text-2xl'>{<TbUser />}</p>
							</Link>
						</>
					)}
				</div>
			</div>
			{location.pathname === '/' && <HeaderSecondLevel />}
		</>
	)
}

export default Header
