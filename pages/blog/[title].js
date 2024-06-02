
// pages/blog/[id].js
import { useRouter } from 'next/router';

const blogPosts = [
  { id: 1, title: 'Understanding Stock Market Basics', content: 'Full content of the blog post...' },
  // Add more blog posts here
];

export default function BlogPost() {
  const router = useRouter();
  const { title } = router.query;

  const decodedTitle= decodeURIComponent(title);
  const post = blogPosts.find(p => p.title === decodedTitle);

  //const post = blogPosts.find(p => p.title == title)
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
