import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'

import theme from '@/utils/theme'
import { MyAppProps } from '@/types/app.types'
import createEmotionCache from '@/utils/emotionCache'

const clientSideEmotionCache = createEmotionCache()

function App(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default App
