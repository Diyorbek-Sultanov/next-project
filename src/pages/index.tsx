import { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

const HomePage: NextPage = () => {
	return (
		<Layout title='Home' description='Blog home page this is beautiful'>
			<div>Home</div>
		</Layout>
	)
}

export default HomePage
