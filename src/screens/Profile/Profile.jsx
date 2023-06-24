import { Link, Outlet, useNavigate } from 'react-router-dom'
import TwoBanners from '../../components/Banners/TwoBanners'
import useActions from '../../hooks/useActions'
import useUser from '../../hooks/useUser'
import Chart from './Chart'

function Profile() {
	const { logoutUser } = useActions()
	const { user } = useUser()
	const navigate = useNavigate()

	return (
		<>
			<Link to='/' className='text-xs font-normal text-gray-600'>
				На главную
			</Link>
			<h2 className='mb-10 mt-2 text-xl font-semibold'>Личный кабинет</h2>
			{user?.data?._id !== 0 ? (
				<>
					<div className='flex flex-row justify-between md:flex-col'>
						<div className='basis-1/4 py-5 md:basis-0'>
							<p className='text-lg font-semibold'>
								{user?.data?.name}
							</p>
							<p className='mb-4 text-xs text-gray-800'>
								{user?.data?.group}
							</p>
							<div className='relative flex gap-x-5'>
								<img
									className='w-40 rounded-md'
									src={user?.data?.avatar}
									alt={user?.data?.name}
								/>
								<p
									onClick={() => navigate('/profile/avatar')}
									className='absolute right-16 top-0 cursor-pointer text-[.65rem] text-gray-400 transition-all duration-200 hover:text-gray-600 md:left-28'
								>
									изменить
								</p>
							</div>
							<br />
							<div className='flex gap-x-5'>
								<p className='text-md mb-2'>
									{user?.data?.about}
								</p>
								<p
									onClick={() => navigate('/profile/change')}
									className='cursor-pointer text-[.65rem] text-gray-400 transition-all duration-200 hover:text-gray-600'
								>
									изменить
								</p>
							</div>
							<br />
							<p className='text-xs'>{user?.data?.email}</p>
							<br />
							<div className='inline cursor-pointer text-sm font-normal text-red-600 transition-all duration-200 hover:text-red-800'>
								<Link to='/addproduct'>
									Добавить новый товар
								</Link>
							</div>
							<div className='flex flex-col items-start'>
								<button
									onClick={() => {
										logoutUser()
										navigate('/catalog')
									}}
									className='mt-5 rounded-md bg-gray-200 px-3 py-px text-sm font-normal text-gray-500 shadow-md transition-all duration-200 hover:bg-gray-300 hover:text-gray-600'
								>
									Выйти
								</button>
							</div>
						</div>
						<Chart className='basis-3/4 md:basis-0' />
					</div>
				</>
			) : (
				<>
					<p className='text-md mb-10 font-normal text-gray-800'>
						Пожалуйста войдите или зарегистрируйтесь
					</p>
				</>
			)}
			<Outlet />
			<TwoBanners banIndex1={0} banIndex2={1} />
		</>
	)
}

export default Profile
