import { FC, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { navData } from './nav.data'
import MyDrawer from './Drawer'
import { TypeWindow } from '@/types/nav.types'
import Link from 'next/link'

const Header: FC<TypeWindow> = ({ window }) => {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState)
	}

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component='nav' sx={{ backgroundColor: '#040711' }}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Link href={`/`} style={{ marginRight: '15px' }}>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1, display: { sm: 'block' } }}
						>
							IT Blog
						</Typography>
					</Link>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navData.map(item => (
							<Button key={item.label} sx={{ color: '#fff' }}>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
					}}
				>
					<MyDrawer handleDrawerToggle={handleDrawerToggle} />
				</Drawer>
			</Box>
		</Box>
	)
}

export default Header
