import NavBar from './components/Navbar';

function App() {
	const isAuthenticated = localStorage.getItem('authorized') as
		| 'auth'
		| 'unAuth';

	return <NavBar user={{ AuthStatus: isAuthenticated }} />;
}

export default App;
