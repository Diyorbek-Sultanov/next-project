import { FC } from 'react'
import { Box } from '@mui/material'

import Layout from '@/components/layout/Layout'
import BlogItem from '@/components/ui/BlogItem'

import { IBlogDetailProps } from '@/types/blog.types'

import Sidebar from '../home/Sidebar'

const BlogDetail: FC<IBlogDetailProps> = ({ blog, categories, lastBlogs }) => {
	return (
		<Layout title='Blog-detail' description='the blog detail page by slug'>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '3fr 9fr',
					columnGap: '35px',
				}}
			>
				<Sidebar lastBlogs={lastBlogs} categories={categories} />
				<BlogItem blog={blog} description={blog.description} />
			</Box>
		</Layout>
	)
}

export default BlogDetail
