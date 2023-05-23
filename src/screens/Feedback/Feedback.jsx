import { useState } from 'react'
import Back from '../../components/Back/Back'

const FORM_ENDPOINT = ''

function Feedback() {
	const [submitted, setSubmitted] = useState(false)
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true)
		}, 100)
	}

	if (submitted) {
		return (
			<>
				<div className='text-2xl'>Thank you!</div>
				<div className='text-md'>We'll be in touch soon.</div>
			</>
		)
	}

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>
				Форма обратной связи
			</h2>
			<form
				action={FORM_ENDPOINT}
				onSubmit={handleSubmit}
				method='POST'
				target='_blank'
			>
				<div className='mb-3 pt-0'>
					<input
						type='text'
						placeholder='Имя'
						name='name'
						className='relative w-full rounded border-0 bg-white bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
						required
					/>
				</div>
				<div className='mb-3 pt-0'>
					<input
						type='email'
						placeholder='E-mail адрес'
						name='email'
						className='relative w-full rounded border-0 bg-white bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
						required
					/>
				</div>
				<div className='mb-3 pt-0'>
					<textarea
						placeholder='Сообщение'
						name='message'
						className='relative w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
						required
					/>
				</div>
				<div className='mb-3 pt-0'>
					<button
						className='mb-1 mr-1 rounded bg-yellow-300 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600'
						type='submit'
					>
						Отправить
					</button>
				</div>
			</form>
		</>
	)
}

export default Feedback
