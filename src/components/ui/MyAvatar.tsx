import { FC } from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import { TypeAuthor } from '@/types/home.types'
import date from 'date-and-time'

const MyAvatar: FC<{ author: TypeAuthor }> = ({ author }) => {
	return (
		<Box display={'flex'} columnGap={'20px'} alignItems={'center'} mt={2}>
			<Box display={'flex'} columnGap={1.5}>
				<Avatar src={author.image} alt={author.name} />
				<Box>
					<Typography variant='body1'>{author.name}</Typography>
					<Typography color={'gray'}>
						{date.format(new Date(), 'DD MMM YYYY')} &#x2022; 10 min read
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default MyAvatar
