import { Notification } from '@mantine/core'
import { useCallback, useEffect, useState } from 'react'

function ShowAlert() {
	const [showAlert, setShowAlert] = useState('')
	const hideAlert = useCallback(() => setShowAlert(null), [])
	// Показываем на 2 сек. сообщение об успешном добавлении товара в корзину
	useEffect(() => {
		const timeoutId = setTimeout(hideAlert, 2000)
		return () => clearTimeout(timeoutId)
	}, [hideAlert, showAlert])

	return (
		<Notification
			color='yellow'
			className='absolute right-0 top-10 z-10 w-fit'
		>
			{showAlert}
		</Notification>
	)
}

export default ShowAlert
