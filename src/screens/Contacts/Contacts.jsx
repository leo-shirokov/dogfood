import {
	FaInstagramSquare,
	FaTelegram,
	FaViber,
	FaWhatsappSquare,
} from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import Back from '../../components/Back/Back'
import useTop from '../../hooks/useTop'

function Contacts() {
	useTop()

	return (
		<>
			<Back />
			<h2 className='mb-8 text-xl font-bold'>Контакты</h2>
			<p>Мы работаем без выходных и перерывов на обед!</p>
			<p>
				С нами можно сязаться в будние дни с 9 до 20 часов, а в выходные
				дни с 10 до 18 часов.
			</p>
			<p>Телефон для связи: +7(499)123-45-67</p>
			<p>E-mail: dogfood@gmail.com</p>
			<p>Мы есть во всех соцсетях!</p>
			<br />
			<div className='inline-flex justify-start gap-x-6 text-xl'>
				<a href='tg://resolve?domain=only_to_top'>
					<FaTelegram />
				</a>
				<a href='https://api.whatsapp.com/send?phone=74991234567'>
					<FaWhatsappSquare />
				</a>
				<a href='viber://chat?number=+79991234567'>
					<FaViber />
				</a>
				<a href='https://www.instagram.com/dogfoof'>
					<FaInstagramSquare />
				</a>
				<a href='https://vk.me/dogfood'>
					<SlSocialVkontakte />
				</a>
			</div>
		</>
	)
}

export default Contacts
