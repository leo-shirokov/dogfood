import { Link, useNavigate } from 'react-router-dom';
import logoDog from './img/logo-dog.svg';
import logoText from './img/logo-text.svg';

function Logo() {
	const navigate = useNavigate();
	return (
		<div
			className='max-w-44 flex flex-nowrap items-center justify-between gap-x-4'
			onClick={() => navigate('/')}
		>
			<Link to='/'>
				<img src={logoDog} alt='logo' />
			</Link>
			<Link className='md:hidden' to='/'>
				<img src={logoText} alt='logo' />
			</Link>
		</div>
	);
}

export default Logo;
