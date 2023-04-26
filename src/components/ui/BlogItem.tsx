import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import { IHomeData } from '@/types/home.types'
import Image from 'next/image'
import MyAvatar from './MyAvatar'

const BlogItem: FC<{ item: IHomeData }> = ({ item }) => {
	return (
		<Box
			mb={3}
			sx={{
				padding: '15px',
				backgroundColor: 'rgba(0, 0,0, .3)',
				borderRadius: '10px',
				color: '#fff',
				boxShadow: '-10px 15px 18px -4px #2F256A',
			}}
		>
			<Box sx={{ position: 'relative', width: '100%', height: '50vh' }}>
				<Image
					src={item.image}
					alt={item.title}
					fill
					style={{ borderRadius: '10px', objectFit: 'cover' }}
				/>
			</Box>
			<Box mt={2}>
				<Typography
					variant='h3'
					mb={1.5}
					sx={{
						backgroundImage: 'linear-gradient(45deg, #f3ec78, #af4261)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					{item.title}
				</Typography>
				<Typography variant='body2' color={'gray'} mb={1.5}>
					{item.exerpt}
				</Typography>
			</Box>
			<MyAvatar author={item.author} />
		</Box>
	)
}

export default BlogItem
