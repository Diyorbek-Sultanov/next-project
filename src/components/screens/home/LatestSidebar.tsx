import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import MyAvatar from '@/components/ui/MyAvatar'
import { ILatestBlog } from '@/types/blog.types'

const LatestSidebar: FC<ILatestBlog> = ({ lastBlogs }) => {
	return (
		<Box display={'flex'} flexDirection={'column'} rowGap={2.5} color={'#fff'}>
			{lastBlogs.map(item => (
				<Box key={item.title}>
					<Box display={'flex'} columnGap={2.5}>
						<Image
							src={item.image.url}
							alt={item.title}
							width={100}
							height={100}
							style={{ objectFit: 'cover', borderRadius: '10px' }}
						/>
						<Box>
							<Typography variant='body1' mb={3}>
								{item.title}
							</Typography>
							<MyAvatar author={item.author} createdAt={item.createdAt} />
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	)
}

export default LatestSidebar
