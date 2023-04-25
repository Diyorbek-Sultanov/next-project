import { FC } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import { TypeDrawer } from '@/types/nav.types'

import { navData } from './nav.data'

const MyDrawer: FC<TypeDrawer> = ({ handleDrawerToggle }) => {
	return (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				IT Blog
			</Typography>
			<Divider />
			<List>
				{navData.map(item => (
					<ListItem key={item.label} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export default MyDrawer
