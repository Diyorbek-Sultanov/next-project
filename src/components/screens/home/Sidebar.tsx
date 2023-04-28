import { FC } from 'react'
import { Box, Typography, Button } from '@mui/material'

import { ISidebarProps } from '@/types/blog.types'

import LatestSidebar from './LatestSidebar'

const Sidebar: FC<ISidebarProps> = ({ lastBlogs, categories }) => {
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
					{categories.map(item => (
						<Button
							fullWidth
							sx={{ justifyContent: 'flex-start' }}
							key={item.id}
						>
							{item.label}
						</Button>
					))}
				</Box>
			</Box>

			<Box border={'1px solid gray'} padding={2} borderRadius={'10px'} ml={3}>
				<Typography variant='h5' color={'#fff'} mb={1.5}>
					Latest
				</Typography>
				<LatestSidebar lastBlogs={lastBlogs} />
			</Box>
		</Box>
	)
}

export default Sidebar
