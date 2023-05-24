import { Box, Group, Modal, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signinUser } from '../../../api-user'
import TwoBanners from '../../../components/Banner/TwoBanners'
import { AuthContext } from '../../../providers/AuthProvider'

function AuthForm() {
	const [opened, { open, close }] = useDisclosure(true)
	const navigate = useNavigate()
	const { setUser } = useContext(AuthContext)
	const [visible, { toggle }] = useDisclosure(false)

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},

		validate: {
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : 'Недопустимый email',
		},
	})

	const handleSubmit = async (values) => {
		const userInfo = await signinUser(values)
		setUser(userInfo)
		navigate('/profile')
	}

	return (
		<>
			<p
				className='md-5 inline cursor-pointer text-sm font-normal text-gray-800'
				onClick={open}
			>
				Вход в учетную запись
			</p>
			<TwoBanners banIndex1={0} banIndex2={1} />
			<Modal
				opened={opened}
				onClose={close}
				title='Личный кабинет'
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
						<PasswordInput
							placeholder='Пароль'
							label='Пароль'
							visible={visible}
							onVisibilityChange={toggle}
							withAsterisk
							{...form.getInputProps('password')}
						/>

						<Group position='right' mt='md'>
							<button
								type='submit'
								className='text-md rounded-md bg-gray-200 px-3 py-1 transition-all duration-200 hover:bg-gray-300'
							>
								Войти
							</button>
						</Group>
					</form>
					<Link
						to='/reset-password'
						className='cursor-pointer text-xs font-normal text-gray-600 transition-all duration-200 hover:text-blue-600'
					>
						Забыли пароль?
					</Link>
				</Box>
			</Modal>
		</>
	)
}

export default AuthForm
