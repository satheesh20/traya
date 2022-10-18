import { createContext, useCallback, useContext, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from './useLocalStorage';

interface props {
	children: React.ReactNode;
}

type dataProps = {
	username: string;
	password: string;
};

type ResponseTye = {
	data: {
		message?: string;
		success?: boolean;
		data: {
			role: string;
			token: string;
			username?: string;
			_id?: string;
			permissionConfig?: Record<string, unknown>;
		};
	};
};

interface userContext {
	user: ResponseTye['data'];
	logOut: () => void;
	loginStatus: boolean;
	startLogin?: (data: dataProps) => Promise<{
		success?: boolean;
		message?: string;
	}>;
	error: Error | '';
}

const UserAuthContext = createContext<userContext>({
	user: {
		data: {
			token: '',
			role: 'admin',
		},
	},
	logOut: () => {},
	loginStatus: false,
	startLogin: undefined,
	error: '',
});

const UserAuthProvider = ({ children }: props) => {
	const [user, setUser] = useLocalStorage('user', null);
	const [loginStatus, setLoginStatus] = useState(false);
	const [error, setError] = useState<userContext['error']>('');

	const startLogin = useCallback(
		async (data: dataProps) => {
			try {
				setLoginStatus(true);
				// const result = (await axios({
				// 	method: 'post',
				// 	url: ApiEndpoints.backend.login,
				// 	data: data,
				// })) as ResponseTye;

				if (result) {
					setUser(result.data);
					setLoginStatus(false);
					const { success, message } = result.data;
					return { success, message };
				}

				return {
					success: false,
					message: 'Sorry! Login is not successful! Please Try Again!',
				};
			} catch (e) {
				setError(e as userContext['error']);
				setLoginStatus(false);
				if (axios.isAxiosError(e) && e.response) {
					return {
						success: false,
						message: e?.response?.data?.message,
					};
				}
				return {
					success: false,
					message:
						e instanceof Error
							? e instanceof ResponseError
								? e?.response?.data?.message
								: e.message
							: JSON.stringify(e),
				};
			}
		},
		[setUser]
	);

	const logOut = useCallback(() => {
		setUser(null);
	}, [setUser]);

	return (
		<UserAuthContext.Provider value={{ user, loginStatus, startLogin, logOut, error }}>
			{children}
		</UserAuthContext.Provider>
	);
};

export const UserAuth = () => useContext(UserAuthContext);
export default UserAuthProvider;
