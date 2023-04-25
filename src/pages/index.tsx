import { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import Home from '@/components/screens/home/Home'

const HomePage: NextPage = () => {
	return (
		<Layout title='Home' description='Blog home page this is beautiful'>
			<Home />
		</Layout>
	)
}

export default HomePage
