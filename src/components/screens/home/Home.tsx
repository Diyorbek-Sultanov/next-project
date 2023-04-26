import { FC } from 'react'
import Box from '@mui/material/Box'
import Slider from './Slider'
import Sidebar from './Sidebar'

const Home: FC = () => {
	return (
		<Box>
			<Slider />
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '3fr 9fr',
					columnGap: '35px',
				}}
			>
				<Sidebar />
				<p>DFdfdf</p>
			</Box>
		</Box>
	)
}

export default Home
