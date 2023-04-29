import { FC } from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import date from 'date-and-time'

import { TypeMyAvatar } from '@/types/blog.types'
import { timeReadDescription } from '@/utils/time'

const MyAvatar: FC<TypeMyAvatar> = ({ author, createdAt, text }) => {
	return (
		<Box display={'flex'} columnGap={'20px'} alignItems={'center'} mt={2}>
			<Box display={'flex'} columnGap={1.5}>
				<Avatar src={author.avatar.url} alt={author.name} />
				<Box>
					<Typography variant='body1'>{author.name}</Typography>
					<Typography color={'gray'}>
						{date.format(new Date(createdAt), 'DD MMM YYYY')} &#x2022;{' '}
						{timeReadDescription(text)} min read
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default MyAvatar
