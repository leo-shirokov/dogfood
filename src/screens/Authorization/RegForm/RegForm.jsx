import { Box, Group, Modal, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../../../components/Alert/Alert'
import useActions from '../../../hooks/useActions'

function RegForm() {
	const { signupUser, getUserInfo } = useActions()
	const [opened, { open, close }] = useDisclosure(true)
	const navigate = useNavigate()
	const [visible, { toggle }] = useDisclosure(false)
	const [isAlert, setIsAlert] = useState('')

	const form = useForm({
		initialValues: {
			email: '',
			group: '',
			password: '',
			confirmPassword: '',
		},

		validate: {
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : 'Недопустимый email',
			password: (value) =>
				/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
					value
				)
					? null
					: 'Недопустимый пароль',
			confirmPassword: (value, values) =>
				value !== values.password ? 'Пароли не совпадают' : null,
		},
	})

	const closeForm = () => {
		close()
		navigate('/profile')
	}

	const handleSubmit = async (values) => {
		try {
			const valuesCopy = { ...values }
			delete valuesCopy.confirmPassword
			await signupUser(valuesCopy)
			await getUserInfo({ groupId: values.groupId })
			navigate('/auth')
		} catch (error) {
			close()
			setIsAlert(error.message)
		}
	}

	const closeAlert = () => {
		setIsAlert('')
		open()
	}

	return (
		<>
			<Modal
				opened={opened}
				onClose={closeForm}
				title='Регистрация'
				centered
			>
				<Box maw={300} mx='auto'>
					<form
						className='flex flex-col gap-y-3'
						onSubmit={form.onSubmit((values) =>
							handleSubmit(values)
						)}
					>
						<TextInput
							withAsterisk
							label='E-mail'
							placeholder='ваш@email.com'
							{...form.getInputProps('email')}
						/>
						<TextInput
							withAsterisk
							label='Группа'
							placeholder='group-'
							{...form.getInputProps('group')}
						/>

						<PasswordInput
							placeholder='Пароль'
							label='Пароль'
							description='Пароль длиной от 6 символов, содержащий буквы в верхнем и нижнем регистре, цифру и специальный знак'
							visible={visible}
							onVisibilityChange={toggle}
							withAsterisk
							{...form.getInputProps('password')}
						/>
						<PasswordInput
							placeholder='Пароль'
							label='Повторить пароль'
							visible={visible}
							onVisibilityChange={toggle}
							withAsterisk
							{...form.getInputProps('confirmPassword')}
						/>

						<Link
							to='/profile/auth'
							className='cursor-pointer text-xs font-normal text-gray-600 transition-all hover:text-gray-800'
						>
							Я уже зарегистрирован
						</Link>

						<Group position='right' mt='md'>
							<button
								type='submit'
								className='text-md rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300'
							>
								Отправить
							</button>
						</Group>
					</form>
				</Box>
			</Modal>
			{/* Выводим предупреждение при ошибке обращения к API */}
			{isAlert && (
				<>
					<Alert isAlert={isAlert} />
					<p
						className='mt-10 inline-block cursor-pointer text-sm font-bold text-gray-800 transition-all duration-200 hover:text-red-600'
						onClick={closeAlert}
					>
						Повторить
					</p>
				</>
			)}
		</>
	)
}

export default RegForm
