import { Box, Group, Modal, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { changePassword, resetPassword } from '../../../api-user'

function ResetForm() {
	const [isToken, setIsToken] = useState(false)
	const [opened, { close }] = useDisclosure(true)
	const [visible, { toggle }] = useDisclosure(false)
	const navigate = useNavigate()

	const form = useForm({
		initialValues: {
			email: '',
			token: '',
			password: '',
		},
		validate: {
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : 'Недопустимый email',
		},
	})

	const closeForm = () => {
		close()
		navigate('/profile')
	}

	const handleSubmit = async (data) => {
		if (data.token) {
			const dataCopy = { ...data }
			delete dataCopy.email
			await changePassword(dataCopy.token, {
				password: dataCopy.password,
			})
			navigate('/profile')
		} else {
			const dataCopy = { ...data }
			delete dataCopy.token
			delete dataCopy.password
			await resetPassword(dataCopy)
			setIsToken(true)
		}
	}

	return (
		<>
			<Modal
				opened={opened}
				onClose={closeForm}
				title='Изменение пароля'
				centered
			>
				<Box maw={300} mx='auto'>
					<form
						className='flex flex-col gap-y-3'
						onSubmit={form.onSubmit((values) =>
							handleSubmit(values)
						)}
					>
						{!isToken && (
							<TextInput
								withAsterisk
								label='E-mail'
								description='На указанный e-mail придет письмо с токеном, который необходимо ввести в соответствующем поле'
								placeholder='ваш@email.com'
								{...form.getInputProps('email')}
							/>
						)}
						{isToken ? (
							<>
								<TextInput
									withAsterisk
									label='Токен'
									placeholder='Введите полученный токен'
									{...form.getInputProps('token')}
								/>
								<PasswordInput
									placeholder='Пароль'
									label='Новый пароль'
									description='Введите новый пароль'
									visible={visible}
									onVisibilityChange={toggle}
									withAsterisk
									{...form.getInputProps('password')}
								/>
							</>
						) : (
							<></>
						)}
						<Group position='right' mt='md'>
							<button
								type='submit'
								className='text-md rounded-md bg-gray-200 px-3 py-1 transition-all duration-200 hover:bg-gray-300'
							>
								Отправить
							</button>
						</Group>
					</form>
					{!isToken && (
						<Link
							to='/profile/auth'
							className='cursor-pointer text-xs font-normal text-gray-600 transition-all duration-200 hover:text-blue-600'
						>
							Вспомнил пароль
						</Link>
					)}
				</Box>
			</Modal>
		</>
	)
}

export default ResetForm
