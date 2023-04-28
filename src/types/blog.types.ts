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
	description: {
		text: string
	}
}

export interface IHomeProps {
	blogs: IBlog[]
	lastBlogs: IBlog[]
	categories: ICategory[]
}

export interface IBlogProps {
	blogs: IBlog[]
}

export interface ISidebarProps {
	lastBlogs: IBlog[]
	categories: ICategory[]
}

export interface ILatestBlog extends Omit<ISidebarProps, 'categories'> {}

export interface IBlogSingle {
	blog: IBlog
}

export interface IAuthor {
	name: string
	avatar: {
		url: string
	}
}

export interface ICategory {
	label: string
	slug: string
	id: string
}

type TypeCategory = {
	label: string
	slug: string
	id?: string
}

export type TypeMyAvatar = {
	author: IAuthor
	createdAt: string
	text?: string
}
