import { Alert as AuthAlert } from '@mantine/core'

function Alert({ isAlert }) {
	return (
		<AuthAlert title='Произошла ошибка при обращении к серверу' color='red'>
			{isAlert}
		</AuthAlert>
	)
}

export default Alert
