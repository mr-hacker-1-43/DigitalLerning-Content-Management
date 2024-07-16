// pages/blog.js
import BlogCard from '../components/BlogCard';

const blogPosts = [
  { id: 1, title: 'Understanding Stock Market Basics', snippet: 'Learn the fundamentals of the stock market...', link: '/blog/1' },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <BlogCard key={post.id} title={post.title} snippet={post.snippet} link={post.link} />
        ))}
      </div>
    </div>
  );
}
