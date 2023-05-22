import { createContext, useEffect, useMemo, useState } from 'react';

// Константа аутентификации — JSON web token (JWT), который отправляется в качестве заголовка аутентификации с каждым запросом API
export const defaultToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlZDE0NTMyOTFkNzkwYjNmMzRjZDIiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgxODM4NDc0LCJleHAiOjE3MTMzNzQ0NzR9.GX6DSN6V_eJJ85fLMO_0T5J5KRD2a2pvmtYjHow3yRg';

const defaultUser = {
	token: defaultToken,
	data: {
		_id: 0,
		name: 'Guest',
		email: 'guest@mail.ru',
		about: 'Гость',
		avatar: 'https://react-learning.ru/image-compressed/default-image.jpg',
		__v: 0,
	},
};

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(defaultUser);

	const logoutUser = () => {
		localStorage.removeItem('user');
		setUser(defaultUser);
	};

	// synchronize with local storage
	useEffect(() => {
		if (user.data._id === 0) {
			const storageUser = JSON.parse(localStorage.getItem('user'));
			if (storageUser) setUser(storageUser);
		} else {
			localStorage.setItem('user', JSON.stringify(user));
		}
	}, [user]);

	const value = useMemo(
		() => ({
			user,
			setUser,
			logoutUser,
		}),
		[user]
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
