import { FC } from 'react'
import { Box } from '@mui/material'

import BlogItem from '@/components/ui/BlogItem'

import { IBlogProps } from '@/types/blog.types'

const Blog: FC<IBlogProps> = ({ blogs }) => {
	return (
		<Box mr={2}>
			{blogs.length &&
				blogs.map(blog => <BlogItem blog={blog} key={blog.id} />)}
		</Box>
	)
}

export default Blog
