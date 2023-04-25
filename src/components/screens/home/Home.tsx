import { FC } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

import 'react-multi-carousel/lib/styles.css'
import { homeData } from './home.data'
import SliderItem from './SliderItem'

const DynamicCarousel = dynamic(() => import('react-multi-carousel'), {
	ssr: false,
})

const Home: FC = () => {
	return (
		<Box width={'100%'} height={'70vh'}>
			<DynamicCarousel
				responsive={{
					mobile: {
						breakpoint: { max: 3000, min: 0 },
						items: 1,
					},
				}}
				showDots={true}
				infinite={false}
				autoPlay={true}
				autoPlaySpeed={2000}
				draggable={false}
			>
				{homeData.map((item, index) => (
					<SliderItem item={item} key={index} />
				))}
			</DynamicCarousel>
		</Box>
	)
}

export default Home
