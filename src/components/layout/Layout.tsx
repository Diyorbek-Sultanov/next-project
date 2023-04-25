import { FC, PropsWithChildren } from 'react'
import { Box } from '@mui/material'

import { IMeta } from '@/types/meta.types'

import Footer from './footer/Footer'
import Header from './header/Header'
import Meta from '../meta/Meta'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	return (
		<Meta title={title} description={description}>
			<Box
				display={'flex'}
				flexDirection={'column'}
				minHeight={'100vh'}
				overflow={'hidden'}
			>
				<Header window={() => window} />
				<Box flexGrow={'1'} pt={10}>
					{children}
				</Box>
				<Footer />
			</Box>
		</Meta>
	)
}

export default Layout
