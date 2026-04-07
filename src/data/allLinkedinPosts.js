import linkedinPosts from './linkedinPosts'
import linkedinPostsMore from './linkedinPostsMore'

const allLinkedinPosts = [...linkedinPosts, ...linkedinPostsMore]
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export default allLinkedinPosts
