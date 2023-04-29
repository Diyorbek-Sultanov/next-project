import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import BlogDetail from '@/components/screens/blog-detail/BlogDetail'

import { BlogService } from '@/services/blog.service'
import { CategoryService } from '@/services/category.service'

import { IBlogDetailProps } from '@/types/blog.types'
import { Params } from '@/types/app.types'

const BlogDetailPage: NextPage<IBlogDetailProps> = ({
	blog,
	categories,
	lastBlogs,
}) => {
	return (
		<BlogDetail blog={blog} lastBlogs={lastBlogs} categories={categories} />
	)
}

export default BlogDetailPage

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const blogs = await BlogService.getAllBlogs()

	return {
		paths: blogs.map(blog => ({
			params: {
				slug: blog.slug,
			},
		})),
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps<IBlogDetailProps> = async ({
	params,
}) => {
	const blog = await BlogService.getDetailBlog(String(params?.slug))
	const lastBlogs = await BlogService.getLatestBlog()
	const categories = await CategoryService.getAllCategories()

	return {
		props: { blog, categories, lastBlogs },
		revalidate: 60,
	}
}
