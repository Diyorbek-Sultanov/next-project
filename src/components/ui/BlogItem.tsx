import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

import { IBlogSingle } from '@/types/blog.types'

import MyAvatar from './MyAvatar'

const BlogItem: FC<IBlogSingle> = ({ blog, description }) => {
	return (
		<Box
			mb={3}
			sx={{
				padding: '15px',
				backgroundColor: 'rgba(0, 0,0, .3)',
				borderRadius: '10px',
				color: '#fff',
				boxShadow: '-10px 15px 18px -4px #2F256A',
			}}
		>
			<Box sx={{ position: 'relative', width: '100%', height: '50vh' }}>
				<Link href={`/blog/${blog.slug}`}>
					<Image
						src={blog.image.url}
						alt={blog.title}
						fill
						style={{ borderRadius: '10px', objectFit: 'cover' }}
					/>
				</Link>
			</Box>
			<Box mt={2}>
				<Typography
					variant='h3'
					mb={1.5}
					sx={{
						backgroundImage: 'linear-gradient(45deg, #f3ec78, #af4261)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					{blog.title}
				</Typography>
				<Typography
					variant='body1'
					sx={{
						backgroundColor: 'gray',
						padding: '4px',
						marginBottom: '15px',
						display: 'inline-block',
					}}
				>
					#{blog.category.label}
				</Typography>
				<Typography variant='body1' color={'gray'} mb={1.5}>
					{blog.expert}
				</Typography>
			</Box>
			<MyAvatar
				author={blog.author}
				createdAt={blog.createdAt}
				text={blog.description.text}
			/>
			{description?.html && (
				<div
					dangerouslySetInnerHTML={{ __html: description.html }}
					style={{ marginTop: '20px', padding: '20px' }}
				/>
			)}
		</Box>
	)
}

export default BlogItem
