import { useEffect } from 'react';
import NavBar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();
	const isAuthenticated = localStorage.getItem('authorized') as
		| 'auth'
		| 'unAuth';

	useEffect(() => {
		console.log(isAuthenticated, 'isAuthenticated');
		if (isAuthenticated === null) {
			navigate('/signIn');
		}
	}, [isAuthenticated, navigate]);

	return <NavBar user={{ AuthStatus: isAuthenticated }} />;
}

export default App;
