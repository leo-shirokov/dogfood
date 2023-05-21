import { createContext, useEffect, useMemo, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (!user) {
			const storageUser = localStorage.getItem('user');
			if (storageUser) setUser(storageUser);
		} else {
			localStorage.setItem('user', user);
		}
	}, [user]);

	const value = useMemo(
		() => ({
			user,
			setUser,
		}),
		[user]
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
