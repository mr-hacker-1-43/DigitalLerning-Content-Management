import React from 'react'
import BlogPost from '../components/BlogPost';
import Link from 'next/link';

const blogPosts = [
  { id: 1, title: 'Understanding Stock Market Basics', snippet: 'Learn the fundamentals of the stock market...' },
  // Add more blog posts here
];

const blogs = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.snippet}</p>
            <Link href={`/blog/${post.title}`}><p>Read More</p></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default blogs