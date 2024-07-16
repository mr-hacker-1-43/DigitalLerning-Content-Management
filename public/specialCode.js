// pages/blog/[id].js
import { useRouter } from 'next/router';
import { getBlogPostById, getAllBlogPostIds } from '../../lib/blog';

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) return <div>Post not found</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllBlogPostIds(); // Fetch all blog post IDs
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostById(params.id); // Fetch blog post by ID
  return {
    props: {
      post,
    },
  };
}
