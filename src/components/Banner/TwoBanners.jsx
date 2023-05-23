import React from 'react'
import { Link } from 'react-router-dom'
import banner2 from './img/Banner-2.svg'
import banner3 from './img/Banner-3.svg'
import banner4 from './img/Banner-4.svg'
import banner5 from './img/Banner-5.svg'

const banners = [banner2, banner3, banner4, banner5]

const TwoBanners = React.memo(({ banIndex1, banIndex2 }) => {
	return (
		<div className='my-10 flex w-full justify-between gap-3 lg:justify-center'>
			<Link
				className='w-1/2 lg:w-full'
				to='product/622c781277d63f6e70967d28'
			>
				<img
					className='object-contain'
					src={banners[banIndex1]}
					alt='banner 1'
				/>
			</Link>
			<Link
				className='w-1/2 lg:hidden'
				to='product/6451e4038fbc473fa8a24d50'
			>
				<img
					className='object-contain'
					src={banners[banIndex2]}
					alt='banner 2'
				/>
			</Link>
		</div>
	)
})

export default TwoBanners
