import { ICategory } from '@/types/blog.types'
import { gql, request } from 'graphql-request'
import { graphqlApi } from './blog.service'

export const CategoryService = {
	async getAllCategories() {
		const query = gql`
			query getAllCategories {
				categories {
					label
					slug
					id
				}
			}
		`

		const { categories } = await request<{ categories: ICategory[] }>(
			graphqlApi,
			query,
		)

		return categories
	},
}
