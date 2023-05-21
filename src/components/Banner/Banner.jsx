import { useState } from 'react';
import banner from './img/Banner.svg';

function Banner({ index }) {
	const [banners] = useState([banner]);

	return (
		<div className='relative -top-10 mx-auto w-full lg:w-3/4 md:-top-0 md:w-11/12'>
			<img className='' src={banners[index]} alt='banner' />
		</div>
	);
}

export default Banner;
