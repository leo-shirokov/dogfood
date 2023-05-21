import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../api';
import { AuthContext } from '../../providers/AuthProvider';
import Back from '../Back/Back';

function Profile() {
	const groupId = 'group-12';

	const { user, setUser } = useContext(AuthContext);
	const [userData, setUserData] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const res = await getUserInfo(groupId);
				setUserData(res);
			} catch (error) {
				console.error(error.message);
			}
		})();
	}, []);

	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Профиль</h2>
			{user ? (
				<>
					<p className='text-lg font-semibold'>{userData.name}</p>
					<p className='mb-4 text-xs text-gray-400'>
						{userData.group}
					</p>
					<p className='text-md mb-2'>{userData.about}</p>
					<p>{userData.email}</p>
					<button onClick={() => setUser(null)}>Выйти</button>
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
