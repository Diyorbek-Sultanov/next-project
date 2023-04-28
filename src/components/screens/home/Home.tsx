import { FC } from 'react'
import Box from '@mui/material/Box'

import Slider from './Slider'
import Sidebar from './Sidebar'
import Blog from './Blog'
import { IHomeProps } from '@/types/blog.types'
import Layout from '@/components/layout/Layout'

const Home: FC<IHomeProps> = ({ blogs, lastBlogs, categories }) => {
	return (
		<Layout title='Home' description='Blog home page this is beautiful'>
			<Box>
				<Slider blogs={blogs.slice(0, 3)} />
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
			</Box>
		</Layout>
	)
}

export default Home
