import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import instagram from './img/instagram.svg'
import telegram from './img/telegram.svg'
import viber from './img/viber.svg'
import vk from './img/vk.svg'
import whatsapp from './img/whatsapp.svg'

export const Footer = React.memo(() => {
	return (
		<div className='mt-20 h-[12.125rem] w-full shrink-0 grow-0 basis-auto bg-yellow-300 px-4 py-10'>
			<div
				className='mx-auto flex max-w-[62rem] items-center justify-between 
            md:justify-center md:text-center'
			>
				<div className='flex flex-col justify-start gap-y-6 md:hidden'>
					<div className='w-40 shrink'>
						<Logo />
					</div>
					<p className='text-xs opacity-50'>
						© Интернет-магазин Dogfood.ru&nbsp;
						<time>{new Date().getFullYear()}</time>
					</p>
				</div>

				<div className='grid gap-y-3 md:hidden'>
					<Link to='/catalog'>Каталог</Link>
					<Link to='/promotions'>Акции</Link>
					<Link to='/news'>Новости</Link>
					<Link to='/reviews'>Отзывы</Link>
				</div>
				<div className='grid gap-y-3 md:hidden'>
					<Link to='/payments'>Оплата и доставка</Link>
					<Link to='/faq'>Часто спрашивают</Link>
					<Link to='/feedback'>Обратная связь</Link>
					<Link to='/contacts'>Контакты</Link>
				</div>

				<div className='grid gap-y-3'>
					<h3 className='text-lg font-semibold'>Мы на связи</h3>
					<a href='tel:+7999000000'>+7(999)123-45-67</a>
					<a href='mailto:dogfood@gmail.com'>dogfood@gmail.com</a>
					<address className='flex justify-between gap-x-3 opacity-50'>
						<a href='tg://resolve?domain=only_to_top'>
							<img src={telegram} alt='telegram' />
						</a>
						<a href='https://api.whatsapp.com/send?phone=74991234567'>
							<img src={whatsapp} alt='whatsapp' />
						</a>
						<a href='viber://chat?number=+79991234567'>
							<img src={viber} alt='viber' />
						</a>
						<a href='https://www.instagram.com/dogfoof'>
							<img src={instagram} alt='instagram' />
						</a>
						<a href='https://vk.me/dogfood'>
							<img src={vk} alt='vk' />
						</a>
					</address>
				</div>
			</div>
		</div>
	)
})

export default Footer
