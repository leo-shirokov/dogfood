import { useEffect } from 'react'

const Notification = ({ message, setMessage, duration = 3000 }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage(false)
		}, duration)

		return () => {
			clearTimeout(timer)
		}
	}, [duration, message, setMessage])

	const closeNotification = () => {
		setMessage('')
	}

	return (
		message && (
			<div className='max-w-80 fixed right-1 top-20 z-50 rounded-lg bg-white p-2.5 opacity-90 shadow-lg transition-all duration-300'>
				<div className='flex items-center justify-between'>
					<span className='mr-2.5'>{message}</span>
					<button
						className='cursor-pointer border-none bg-transparent p-0 text-lg text-gray-700'
						onClick={closeNotification}
					>
						&times;
					</button>
				</div>
			</div>
		)
	)
}

export default Notification
