import { Box, Group, Modal, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../../api'
import TwoBanners from '../../components/Banner/TwoBanners'

function RegForm() {
	const [opened, { open, close }] = useDisclosure(true)
	const navigate = useNavigate()
	const [visible, { toggle }] = useDisclosure(false)

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

	const handleSubmit = async (values) => {
		try {
			console.log(values)
			const valuesCopy = { ...values }
			delete valuesCopy.confirmPassword
			const res = await signupUser(valuesCopy)
			navigate('/auth')
			console.log(res)
		} catch (error) {
			// TODO вывести `error.message` в модалочку
		}
	}

	return (
		<>
			<p
				className='md-5 inline cursor-pointer text-sm font-normal text-gray-800'
				onClick={open}
			>
				Регистрация
			</p>
			<TwoBanners banIndex1={0} banIndex2={1} />
			<Modal opened={opened} onClose={close} title='Регистрация' centered>
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
							to='/auth'
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
		</>
	)
}

export default RegForm
