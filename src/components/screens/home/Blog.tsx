import { FC } from 'react'
import { Box } from '@mui/material'

import BlogItem from '@/components/ui/BlogItem'

import { homeData } from './home.data'

const Blog: FC = () => {
	return (
		<Box mr={2}>
			{homeData.map(item => (
				<BlogItem item={item} key={item.title} />
			))}
		</Box>
	)
}

export default Blog
