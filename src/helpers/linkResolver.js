export const linkResolver = doc => (
	doc.type !== 'homepage'
	? `#${doc.uid}`
	: '/'
)