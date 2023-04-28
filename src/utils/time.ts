export const timeReadDescription = (text: string | undefined) => {
	const wpm = 200
	const words = String(text).trim().split(/\s+/).length
	const time = Math.ceil(words / wpm)

	return time
}
