import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { User } from '@/types';

const defaultTheme = createTheme();

export default function Login() {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<User>();

	const onSubmit: SubmitHandler<User> = (event) => {
		const storedUserString = localStorage.getItem('user');

		const enteredEmail = event.email;
		const enteredPassword = event.password;

		if (storedUserString) {
			const storedUser: User = JSON.parse(storedUserString);

			// Check if entered credentials match stored user data
			if (
				enteredEmail === storedUser.email &&
				enteredPassword === storedUser.password
			) {
				localStorage.setItem('authorized', 'auth');
				navigate('/dashboard');
			} else {
				alert('Invalid credentials. Please try again.');
				console.log('Invalid credentials. Please try again.');
			}
		} else {
			alert('User not found. Please register first.');
			console.log('User not found. Please register first.');
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit(onSubmit)}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							{...register('email')}
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							{...register('password')}
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Typography component="p" variant="body2">
							Do you already have an account? <Link to="/signUp">SignUp</Link>
						</Typography>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
