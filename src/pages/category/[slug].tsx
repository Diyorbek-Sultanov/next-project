import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import Category from '@/components/screens/category/Category'

import { BlogService } from '@/services/blog.service'
import { CategoryService } from '@/services/category.service'

import { IHomeProps } from '@/types/blog.types'
import { Params } from '@/types/app.types'

const CategoryDetailPage: NextPage<IHomeProps> = ({
	blogs,
	categories,
	lastBlogs,
}) => {
	return (
		<Category blogs={blogs} categories={categories} lastBlogs={lastBlogs} />
	)
}

export default CategoryDetailPage

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const categories = await CategoryService.getAllCategories()

	return {
		paths: categories.map(category => ({
			params: {
				slug: category.slug,
			},
		})),
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps<IHomeProps> = async ({
	params,
}) => {
	const lastBlogs = await BlogService.getLatestBlog()
	const categories = await CategoryService.getAllCategories()
	const blogs = await CategoryService.getCategoryDetail(String(params?.slug))

	return {
		props: { blogs, categories, lastBlogs },
		revalidate: 60,
	}
}
