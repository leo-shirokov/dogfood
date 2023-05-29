import { Group, Modal, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { changeUserInfo } from '../../api-user'
import TwoBanners from '../../components/Banners/TwoBanners'
import { AuthContext } from '../../providers/AuthProvider'

function Profile() {
	const { user, logoutUser, setUser } = useContext(AuthContext)
	const [opened, { open, close }] = useDisclosure(false)
	const navigate = useNavigate()

	// Инициализируем значения формы изменения информации о пользователе
	const form = useForm({
		initialValues: {
			name: '',
			about: '',
		},
	})

	const handleSubmit = async (values) => {
		const userInfo = await changeUserInfo(
			user.token,
			user.data.group,
			values
		)
		setUser((prev) => ({ ...prev, data: userInfo }))
		close()
	}

	return (
		<>
			<Link to='/' className='text-xs font-normal text-gray-600'>
				На главную
			</Link>
			<h2 className='mb-10 mt-2 text-xl font-semibold'>Личный кабинет</h2>
			{user.data._id !== 0 ? (
				<>
					<p className='text-lg font-semibold'>{user?.data?.name}</p>
					<p className='mb-4 text-xs text-gray-400'>
						{user?.data?.group}
					</p>
					<div className='flex flex-col'>
						<p
							onClick={() => navigate('/profile/avatar')}
							className='cursor-pointer text-xs text-gray-400 transition-all duration-200 hover:text-gray-600'
						>
							изменить
						</p>
						<img
							className='w-40 rounded-md'
							src={user?.data?.avatar}
							alt={user?.data?.name}
						/>
					</div>
					<div className='flex gap-x-5'>
						<p className='text-md mb-2'>{user?.data?.about}</p>
						<p
							onClick={open}
							className='cursor-pointer text-xs text-gray-400 transition-all duration-200 hover:text-gray-600'
						>
							изменить
						</p>
					</div>
					<p>{user?.data?.email}</p>
					<hr className='my-5' />

					<div className='flex flex-col items-start'>
						<div className='cursor-pointer text-sm font-normal text-green-600 transition-all duration-200 hover:text-green-800'>
							<Link to='/addproduct'>Добавить новый товар</Link>
						</div>
						<button
							onClick={logoutUser}
							className='mt-5 rounded-md bg-gray-200 px-3 py-px text-sm font-normal text-gray-500 shadow-md transition-all duration-200 hover:bg-gray-300 hover:text-gray-600'
						>
							Выйти
						</button>
					</div>

					<Modal
						opened={opened}
						onClose={close}
						title='Редактирование профиля'
						centered
					>
						<form
							className='flex flex-col gap-y-3'
							onSubmit={form.onSubmit((values) =>
								handleSubmit(values)
							)}
						>
							<TextInput
								withAsterisk
								label='Имя'
								placeholder='Введите текст'
								{...form.getInputProps('name')}
							/>
							<TextInput
								withAsterisk
								label='Обо мне'
								placeholder='Введите текст'
								{...form.getInputProps('about')}
							/>
							<Group position='right' mt='md'>
								<button
									type='submit'
									className='text-md rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300'
								>
									Изменить
								</button>
							</Group>
						</form>
					</Modal>
				</>
			) : (
				<>
					<p className='text-md mb-10 font-normal text-gray-800'>
						Пожалуйста войдите или зарегистрируйтесь
					</p>
					<div className='inline-flex flex-col gap-y-5'>
						<button
							onClick={() => navigate('/profile/auth')}
							className='text-md rounded-md bg-gray-200 px-3 py-1 transition-all hover:bg-gray-300'
						>
							Войти
						</button>
						<button
							onClick={() => navigate('/profile/registration')}
							className='text-md mb-5 rounded-md bg-gray-200 px-3 py-1 transition-all hover:bg-gray-300'
						>
							Регистрация
						</button>
					</div>
				</>
			)}
			<Outlet />
			<TwoBanners banIndex1={0} banIndex2={1} />
		</>
	)
}

export default Profile
