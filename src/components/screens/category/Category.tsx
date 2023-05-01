import { FC } from 'react'

import { Box } from '@mui/material'

import Layout from '@/components/layout/Layout'

import { IHomeProps } from '@/types/blog.types'

import Blog from '../home/Blog'
import Sidebar from '../home/Sidebar'

const Category: FC<IHomeProps> = ({ blogs, categories, lastBlogs }) => {
	return (
		<Layout
			title='Category-detail'
			description='the category detail page is beautiful'
		>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '3fr 9fr',
					columnGap: '35px',
				}}
			>
				<Sidebar lastBlogs={lastBlogs} categories={categories} />
				<Blog blogs={blogs} />
			</Box>
		</Layout>
	)
}

export default Category
