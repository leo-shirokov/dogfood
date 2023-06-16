import { Group, Modal, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import TwoBanners from '../../components/Banners/TwoBanners'
import useActions from '../../hooks/useActions'
import useUser from '../../hooks/useUser'
import Chart from './Chart'

function Profile() {
	const { logoutUser, changeUserInfo } = useActions()
	const { user } = useUser()
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
		close()
		changeUserInfo({
			groupId: user.data.group,
			info: values,
		})
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

					<div className='flex flex-col items-start'>
						<button
							onClick={() => logoutUser()}
							className='mt-5 rounded-md bg-gray-200 px-3 py-px text-sm font-normal text-gray-500 shadow-md transition-all duration-200 hover:bg-gray-300 hover:text-gray-600'
						>
							Выйти
						</button>
						<br />
					</div>
					<Chart />
					<div className='inline cursor-pointer text-sm font-normal text-red-600 transition-all duration-200 hover:text-red-800'>
						<Link to='/addproduct'>Добавить новый товар</Link>
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
