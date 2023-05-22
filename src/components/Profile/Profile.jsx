import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Back from '../Back/Back';

function Profile() {
	const { user, logoutUser } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Профиль</h2>
			{user.data._id !== 0 ? (
				<>
					<p className='text-lg font-semibold'>{user?.data?.name}</p>
					<p className='mb-4 text-xs text-gray-400'>
						{user?.data?.group}
					</p>
					<p className='text-md mb-2'>{user?.data?.about}</p>
					<p>{user?.data?.email}</p>
					<hr className='my-5' />
					<div className='cursor-pointer text-sm font-normal text-gray-700 transition-all hover:text-black'>
						<Link to='/addproduct'>
							Форма добавления нового товара
						</Link>
					</div>
					<button
						onClick={logoutUser}
						className='mt-5 rounded-md bg-gray-200 px-3 py-px text-sm font-normal text-gray-500 shadow-md transition-all hover:bg-gray-300 hover:text-gray-600'
					>
						Выйти
					</button>
				</>
			) : (
				<>
					<p className='text-md mb-10 font-normal text-gray-800'>
						Пожалуйста войдите или зарегистрируйтесь
					</p>
					<div className='inline-flex flex-col gap-y-5'>
						<button
							onClick={() => navigate('/auth')}
							className='text-md rounded-md bg-gray-200 px-3 py-1 transition-all hover:bg-gray-300'
						>
							Войти
						</button>
						<button
							onClick={() => navigate('/registration')}
							className='text-md rounded-md bg-gray-200 px-3 py-1 transition-all hover:bg-gray-300'
						>
							Регистрация
						</button>
					</div>
				</>
			)}
		</>
	);
}

export default Profile;
