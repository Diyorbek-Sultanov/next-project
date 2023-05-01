import { GetStaticProps, NextPage } from 'next'
import { Grid } from '@mui/material'

import Layout from '@/components/layout/Layout'
import BlogItem from '@/components/ui/BlogItem'

import { BlogService } from '@/services/blog.service'

import { IBlogProps } from '@/types/blog.types'

const BlogPage: NextPage<IBlogProps> = ({ blogs }) => {
	return (
		<Layout title='Blog' description='the blog index page'>
			<Grid
				container
				sx={{
					margin: '0 auto',
					maxWidth: '1380px',
					placeContent: 'center',
					gap: '25px',
				}}
			>
				{blogs.map(blog => (
					<Grid sm={12} md={6} item lg={5} key={blog.id}>
						<BlogItem blog={blog} />
					</Grid>
				))}
			</Grid>
		</Layout>
	)
}

export default BlogPage

export const getStaticProps: GetStaticProps<IBlogProps> = async () => {
	const blogs = await BlogService.getAllBlogs()

	return {
		props: { blogs },
	}
}
