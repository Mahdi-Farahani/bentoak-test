import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductIcon from '@mui/icons-material/ShoppingBasket';
import ChartIcon from '@mui/icons-material/ShowChart';
import MenuIcon from '@mui/icons-material/Menu';
import NavBar from '@/components/Navbar';

type DrawerItem = {
	text: string;
	icon: JSX.Element;
	path: string;
};

type AuthStatus = 'auth' | 'unAuth' | null;

const DashBoard: React.FC = () => {
	const navigate = useNavigate();
	const isAuthenticated: AuthStatus =
		(localStorage.getItem('authorized') as AuthStatus) || 'unAuth';

	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	const drawerItems: DrawerItem[] = [
		{ text: 'Dashboard', icon: <DashboardIcon />, path: '/dashBoard' },
		{ text: 'Products', icon: <ProductIcon />, path: '/dashBoard/products' },
		{ text: 'Charts', icon: <ChartIcon />, path: '/dashBoard/charts' },
	];

	const handleNavigation = (path: string): void => {
		navigate(path);
		if (isMobile) {
			setDrawerOpen(false);
		}
	};

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<>
			<NavBar user={{ AuthStatus: isAuthenticated }} />
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={toggleDrawer}
				sx={{ mr: 2, display: isMobile ? 'block' : 'none' }}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				variant={isMobile ? 'temporary' : 'permanent'}
				open={drawerOpen}
				onClose={toggleDrawer}
				anchor="left"
			>
				<List>
					{drawerItems.map((item) => (
						<ListItem
							button
							key={item.text}
							onClick={() => handleNavigation(item.path)}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<div
				style={{
					marginTop: '100px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Outlet />
			</div>
		</>
	);
};

export default DashBoard;
