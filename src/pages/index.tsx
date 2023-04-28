import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IBlogProps } from '@/types/blog.types'
import { BlogService } from '@/services/blog.service'

const HomePage: NextPage<IBlogProps> = ({ blogs }) => {
	return <Home blogs={blogs} />
}

export default HomePage

export const getStaticProps: GetStaticProps<IBlogProps> = async () => {
	const blogs = await BlogService.getAllBlogs()

	return {
		props: { blogs },
	}
}
