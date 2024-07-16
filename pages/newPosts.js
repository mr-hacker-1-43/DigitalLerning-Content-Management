// pages/new-posts.js
import { useState } from 'react';

export default function NewPosts() {
  const [posts, setPosts] = useState([{ title: '', content: '' }]);

  const handleChange = (index, event) => {
    const newPosts = posts.slice();
    newPosts[index][event.target.name] = event.target.value;
    setPosts(newPosts);
  };

  const addPost = () => {
    setPosts([...posts, { title: '', content: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ posts }),
    });

    if (res.ok) {
      const createdPosts = await res.json();
      console.log('Posts created:', createdPosts);
      // Optionally, redirect to another page or reset the form
    } else {
      console.error('Failed to create posts');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create Multiple Posts</h1>
      <form onSubmit={handleSubmit}>
        {posts.map((post, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`title-${index}`}>
              Title
            </label>
            <input
              type="text"
              id={`title-${index}`}
              name="title"
              value={post.title}
              onChange={(e) => handleChange(index, e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor={`content-${index}`}>
              Content
            </label>
            <textarea
              id={`content-${index}`}
              name="content"
              value={post.content}
              onChange={(e) => handleChange(index, e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addPost}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Add Another Post
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Posts
        </button>
      </form>
    </div>
  );
}
