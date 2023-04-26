import { FC } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

import { homeData } from './home.data'
import SliderItem from './SliderItem'
import 'react-multi-carousel/lib/styles.css'

const DynamicCarousel = dynamic(() => import('react-multi-carousel'), {
	ssr: false,
})

const Slider: FC = () => {
	return (
		<Box width={'100%'} height={'70vh'} mb={8}>
			<DynamicCarousel
				responsive={{
					mobile: {
						breakpoint: { max: 3000, min: 0 },
						items: 1,
					},
				}}
				showDots={true}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				draggable={false}
			>
				{homeData.map(item => (
					<SliderItem item={item} key={item.title} />
				))}
			</DynamicCarousel>
		</Box>
	)
}

export default Slider
