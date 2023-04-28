import { FC } from 'react'
import { Box } from '@mui/material'
import Carousel from 'react-multi-carousel'

import { ISliderProps } from '@/types/slider.type'

import SliderItem from './SliderItem'
import 'react-multi-carousel/lib/styles.css'

const Slider: FC<ISliderProps> = ({ blogs }) => {
	return (
		<Box width={'100%'} height={'70vh'} mb={8}>
			<Carousel
				responsive={{
					mobile: {
						breakpoint: { max: 3000, min: 0 },
						items: 1,
					},
				}}
				showDots={true}
				infinite={true}
				autoPlay={true}
				ssr={true}
				autoPlaySpeed={2000}
				draggable={false}
			>
				{blogs.map(blog => (
					<SliderItem blog={blog} key={blog.id} />
				))}
			</Carousel>
		</Box>
	)
}

export default Slider
