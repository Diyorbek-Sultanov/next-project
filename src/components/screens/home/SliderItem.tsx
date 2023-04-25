import { FC } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/image'
import date from 'date-and-time'

import { IHomeData } from '@/types/home.types'

const SliderItem: FC<{ item: IHomeData }> = ({ item }) => {
	return (
		<Box>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '70vh',
				}}
			>
				<Image
					src={item.image}
					alt={item.title}
					fill
					priority
					style={{ objectFit: 'cover' }}
				/>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0, 0, 0, .5)',
					}}
				/>
				<Box
					sx={{
						position: 'relative',
						top: '50%',
						transform: 'translateY(-50%)',
						color: '#fff',
						zIndex: 999,
						paddingLeft: '50px',
						width: '65%',
					}}
				>
					<Typography variant='h2' mb={'25px'}>
						{item.title}
					</Typography>
					<Typography variant='subtitle1'>{item.exerpt}</Typography>
					<Box display={'flex'} columnGap={'20px'} alignItems={'center'} mt={2}>
						<Avatar src={item.author.image} alt={item.author.name} />
						<Box>
							<Typography variant='body1'>{item.author.name}</Typography>
							<Typography>
								{date.format(new Date(), 'DD MMM YYYY')} &#x2022; 10 min read
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default SliderItem
