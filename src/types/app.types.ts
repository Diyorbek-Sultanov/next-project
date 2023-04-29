import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
import { ParsedUrlQuery } from 'querystring'

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

export interface Params extends ParsedUrlQuery {
	slug: string
}
