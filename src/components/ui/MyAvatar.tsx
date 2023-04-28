import { FC } from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import date from 'date-and-time'
import { IAuthor, TypeMyAvatar } from '@/types/blog.types'

const MyAvatar: FC<TypeMyAvatar> = ({ author, createdAt }) => {
	//console.log(author.avatar.url)
	return (
		<Box display={'flex'} columnGap={'20px'} alignItems={'center'} mt={2}>
			<Box display={'flex'} columnGap={1.5}>
				{/*<Avatar src={author.avatar.url} alt={author.name} />*/}
				<Box>
					<Typography variant='body1'>{author.name}</Typography>
					<Typography color={'gray'}>
						{date.format(new Date(createdAt), 'DD MMM YYYY')} &#x2022; 10 min
						read
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default MyAvatar
