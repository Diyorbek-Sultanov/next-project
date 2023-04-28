export interface IBlog {
	title: string
	slug: string
	id: string
	createdAt: string
	expert: string
	image: {
		url: string
	}
	updatedAt: string
	author: IAuthor
	category: TypeCategory
}

export interface IBlogProps {
	blogs: IBlog[]
}

export interface IBlogSingle {
	blog: IBlog
}

export interface IAuthor {
	name: string
	avatar: {
		url: string
	}
}

type TypeCategory = {
	label: string
	slug: string
}

export type TypeMyAvatar = {
	author: IAuthor
	createdAt: string
}
