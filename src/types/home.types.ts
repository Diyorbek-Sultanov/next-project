export interface IHomeData {
	image: string
	title: string
	exerpt: string
	author: TypeAuthor
}

export type TypeAuthor = {
	name: string
	image: string
}
