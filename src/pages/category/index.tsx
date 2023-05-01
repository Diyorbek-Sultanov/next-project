import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Typography, ButtonGroup, Button } from '@mui/material'

import Layout from '@/components/layout/Layout'

import { CategoryService } from '@/services/category.service'

import { ICategoryProps } from '@/types/blog.types'

const CategoryPage: NextPage<ICategoryProps> = ({ categories }) => {
	const { push } = useRouter()

	return (
		<Layout title='Category' description='the category index page'>
			<Box
				sx={{
					backgroundColor: 'black',
					padding: '20px',
					borderRadius: '12px',
					width: '950px',
					height: '40vh',
					margin: '45px auto',
					display: 'flex',
					flexDirection: 'column',
					rowGap: '20px',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant='h2' fontFamily={'monospace'} color={'#fff'}>
					All Categories
				</Typography>

				<ButtonGroup
					variant='contained'
					aria-label='outlined primary button group'
				>
					{categories.map(item => (
						<Button
							onClick={() => push(`/category/${item.slug}`)}
							key={item.id}
						>
							#&nbsp;{item.label}
						</Button>
					))}
				</ButtonGroup>
			</Box>
		</Layout>
	)
}

export default CategoryPage

export const getStaticProps: GetStaticProps<ICategoryProps> = async () => {
	const categories = await CategoryService.getAllCategories()

	return {
		props: { categories },
		revalidate: 60,
	}
}
