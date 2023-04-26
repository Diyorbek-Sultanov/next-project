import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

import MyAvatar from '@/components/ui/MyAvatar'
import { homeData } from './home.data'

const LatestSidebar: FC = () => {
	return (
		<Box display={'flex'} flexDirection={'column'} rowGap={2.5} color={'#fff'}>
			{homeData.map(item => (
				<Box key={item.title}>
					<Box display={'flex'} columnGap={2.5}>
						<Image
							src={item.image}
							alt={item.title}
							width={100}
							height={100}
							style={{ objectFit: 'cover', borderRadius: '10px' }}
						/>
						<Box>
							<Typography variant='body1' mb={3}>
								{item.title}
							</Typography>
							<MyAvatar author={item.author} />
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	)
}

export default LatestSidebar
