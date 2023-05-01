import { IBlog, ICategory } from '@/types/blog.types'
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

	async getCategoryDetail(slug: string) {
		const query = gql`
			query categoryDetail($slug: String!) {
				blogs(where: { category: { slug: $slug } }) {
					title
					slug
					id
					expert
					image {
						url
					}
					updatedAt
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
					createdAt
					description {
						text
					}
				}
			}
		`

		const { blogs } = await request<{ blogs: IBlog[] }>(graphqlApi, query, {
			slug,
		})

		return blogs
	},
}
