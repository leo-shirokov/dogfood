import { useRef, useState } from 'react'
import Back from '../../components/Back/Back'
import TwoBanners from '../../components/Banners/TwoBanners'
import useTop from '../../hooks/useTop'

const FORM_ENDPOINT = ''

function Feedback() {
	useTop()

	const [submitted, setSubmitted] = useState(false)
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const messageRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = {
			firstName: nameRef.current.value,
			email: emailRef.current.value,
			message: messageRef.current.value,
		}
		console.log(data)
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<>
				<div className='text-2xl'>Спасибо</div>
				<div className='text-md'>Мы ответим вам как можно скорее</div>
				<TwoBanners banIndex1={2} banIndex2={3} />
				<TwoBanners banIndex1={0} banIndex2={1} />
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
						ref={nameRef}
						className='relative w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
						required
					/>
				</div>
				<div className='mb-3 pt-0'>
					<input
						type='email'
						placeholder='E-mail адрес'
						name='email'
						ref={emailRef}
						className='relative w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-400 shadow outline-none focus:outline-none focus:ring'
						required
					/>
				</div>
				<div className='mb-3 pt-0'>
					<textarea
						placeholder='Сообщение'
						name='message'
						ref={messageRef}
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
