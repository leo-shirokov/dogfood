import React, { useEffect } from 'react'
import './Notification.css'

const Notification = ({ message, setMessage, duration = 3000 }) => {
	useEffect(() => {
		// Закрытие уведомления после указанной продолжительности
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
			<div className={`notification ${message ? 'show' : ''}`}>
				<div className='notification-content'>
					<span className='notification-message'>{message}</span>
					<button
						className='notification-close'
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
