import { IBlog } from '@/types/blog.types'
import { gql, request } from 'graphql-request'

const graphqlApi = process.env.HYGRAPH_API_KEY as string

export const BlogService = {
	async getAllBlogs() {
		const query = gql`
			query GetBlogs {
				blogs {
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
				}
			}
		`

		const { blogs } = await request<{ blogs: IBlog[] }>(graphqlApi, query)

		return blogs
	},
}
