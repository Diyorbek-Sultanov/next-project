import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IHomeProps } from '@/types/blog.types'
import { BlogService } from '@/services/blog.service'
import { CategoryService } from '@/services/category.service'

const HomePage: NextPage<IHomeProps> = ({ blogs, lastBlogs, categories }) => {
	return <Home blogs={blogs} lastBlogs={lastBlogs} categories={categories} />
}

export default HomePage

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
	const blogs = await BlogService.getAllBlogs()
	const lastBlogs = await BlogService.getLatestBlog()
	const categories = await CategoryService.getAllCategories()

	return {
		props: { blogs, lastBlogs, categories },
		revalidate: 60,
	}
}
