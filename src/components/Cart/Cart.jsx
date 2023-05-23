import { Link } from 'react-router-dom';
import Back from '../Back/Back';

function Cart() {
	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Корзина</h2>
			<p className='text-md font-bold text-gray-800'>Корзина пуста</p>
			<br />
			<p className='mb-10 text-sm font-normal text-gray-600'>
				В вашей корзине нет товаров
			</p>
			<Link to='/catalog' className='text-md font-bold text-yellow-400'>
				Добавить товары
			</Link>
		</>
	);
}

export default Cart;
