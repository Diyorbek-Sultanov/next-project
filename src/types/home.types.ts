export interface IHomeData {
	image: string
	title: string
	exerpt: string
	author: TypeAuthor
}

type TypeAuthor = {
	name: string
	image: string
}
