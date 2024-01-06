import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import { authPages, pages } from '@/constants';
import { NavbarProps } from '@/types';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ window, user }: NavbarProps) {
	const navigate = useNavigate();

	const views = {
		auth: pages,
		unAuth: authPages,
	};
	const drawerWidth = 240;

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const currentView = views[user.AuthStatus] ?? authPages;

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const logOut = () => {
		localStorage.removeItem('authorized');
		localStorage.removeItem('user');
		navigate('/');
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				BenToak Test
			</Typography>
			<Divider />
			<List>
				{currentView.map(({ id, title, path }) => (
					<ListItem key={id} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<Link
								href={path}
								sx={{ paddingX: '20px', textDecoration: 'none' }}
								color={'#000000'}
								bgcolor={'#fff'}
							>
								<ListItemText primary={title} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	const isAuth = localStorage.getItem('authorized');
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						BenToak Test
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
						{isAuth && (
							<Button onClick={logOut} variant="contained" color="info">
								LogOut
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
}
