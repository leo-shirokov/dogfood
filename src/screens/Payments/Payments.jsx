import { CiDeliveryTruck } from 'react-icons/ci'
import { MdPayment } from 'react-icons/md'
import Back from '../../components/Back/Back'
import useTop from '../../hooks/useTop'

function Payment() {
	useTop()

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Оплата и доставка</h2>
			<h3 className='text-md mb-5 font-semibold'>Оплата товаров:</h3>
			<MdPayment />
			<p> Мы принимаем оплату за наши товары следующими способами:</p>
			<ul className='text-md mb-10 list-inside list-disc leading-8'>
				<li>Банковские карты (Visa, Mastercard, American Express)</li>
				<li>Электронные кошельки (Яндекс Деньги, WebMoney, QIWI)</li>
				<li>
					Наличные (только при самовывозе) Безналичный расчет (для
					юридических лиц)
				</li>
			</ul>
			<h3 className='text-md mb-5 font-semibold'>Доставка товаров:</h3>
			<CiDeliveryTruck />
			<p>Мы доставляем товары по всей России следующими способами: </p>
			<ul className='text-md mb-10 list-inside list-disc leading-8'>
				<li>Курьерская доставка (доставка до двери)</li>
				<li>Почтовая доставка (доставка до отделения связи)</li>
				<li>Самовывоз (со склада нашей компании)</li>
			</ul>
			<p>
				Стоимость доставки зависит от веса и габаритов товаров, а также
				от региона доставки.
			</p>

			<p>
				Для оформления доставки вам необходимо будет указать адрес
				доставки и контактные данные получателя. Если вы выбираете
				курьерскую доставку, убедитесь, что по указанному адресу будет
				кто-то присутствовать в момент доставки. Мы стараемся доставлять
				товары в кратчайшие сроки, обычно доставка занимает от 2 до 5
				дней в зависимости от региона. После отправки товара мы вышлем
				вам номер отслеживания, чтобы вы могли отслеживать статус
				доставки. Если у вас возникли какие-либо вопросы относительно
				оплаты или доставки, пожалуйста, свяжитесь с нашей службой
				поддержки клиентов по телефону или электронной почте. Мы всегда
				готовы помочь вам!
			</p>
		</>
	)
}

export default Payment