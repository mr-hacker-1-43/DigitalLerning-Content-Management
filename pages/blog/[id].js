// pages/blog/[id].js
import { useRouter } from 'next/router';

// Example blog posts data
const blogPosts = [
  { id: 1, title: 'Understanding Stock Market Basics', content: 'Full content of the blog post about stock market basics...' },
  { id: 2, title: 'Advanced Stock Trading Strategies', content: 'Full content of the blog post about advanced trading strategies...' },
  // Add more blog posts here
];

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post by ID
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
