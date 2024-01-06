import NavBar from './components/Navbar';
import { Typography, Link } from '@mui/material';

function App() {
	const isAuthenticated = localStorage.getItem('authorized') as
		| 'auth'
		| 'unAuth';

	return (
		<>
			<NavBar user={{ AuthStatus: isAuthenticated }} />
			<div
				style={{
					marginTop: '10rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				{isAuthenticated ? (
					<>
						<Typography variant="h5">You are Signed In Successfully</Typography>
						<Link href="/dashboard">Go To your DashBoard</Link>
					</>
				) : (
					<>
						<Typography variant="h5">Please Sign In</Typography>
						<Link href="/signIn">SignIn</Link>
					</>
				)}
			</div>
		</>
	);
}

export default App;
