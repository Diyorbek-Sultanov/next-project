import { FC } from 'react'
import { Box, Typography, Button } from '@mui/material'

import { navData } from '@/components/layout/header/nav.data'
import LatestSidebar from './LatestSidebar'

const Sidebar: FC = () => {
	return (
		<Box>
			<Box
				border={'1px solid gray'}
				padding={2}
				borderRadius={'10px'}
				height={'25vh'}
				ml={3}
				mb={2}
			>
				<Typography variant='h5' color={'#fff'} mb={1.5}>
					Category
				</Typography>
				<Box display={'flex'} flexDirection={'column'} rowGap={2}>
					{navData.map((item, index) => (
						<Button fullWidth sx={{ justifyContent: 'flex-start' }} key={index}>
							{item.label}
						</Button>
					))}
				</Box>
			</Box>

			<Box border={'1px solid gray'} padding={2} borderRadius={'10px'} ml={3}>
				<Typography variant='h5' color={'#fff'} mb={1.5}>
					Latest
				</Typography>
				<LatestSidebar />
			</Box>
		</Box>
	)
}

export default Sidebar
