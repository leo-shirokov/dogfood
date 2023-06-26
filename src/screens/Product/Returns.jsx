import React from 'react'

function Returns() {
	return (
		<details className='mb-10'>
			<summary className='text-md mb-5 cursor-pointer font-semibold'>
				Возврат товара
			</summary>
			<ul className='list-inside list-disc'>
				<li>
					Покупатели имеют право вернуть товар в течение определенного
					периода времени (например, 14 дней) с момента получения
					заказа.
				</li>
				<li>
					Товар должен быть в неиспользованном состоянии, с
					оригинальными этикетками и упаковкой.
				</li>
				<li>
					Покупатель должен предоставить доказательство покупки, такой
					как квитанция или заказной номер.
				</li>
				<li>
					Возврат денежных средств осуществляется в ту же форму
					оплаты, которой была осуществлена покупка.
				</li>
			</ul>
		</details>
	)
}

export default Returns
