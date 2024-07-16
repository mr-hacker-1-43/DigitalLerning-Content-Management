// components/LoginForm.js
import { useState } from 'react';

export default function NewPosts() {
  const [posts, setPosts] = useState([{ title: '', content: '', author: '' }]);

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

  return (<>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <div key={index}>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input value={post.title} onChange={(e) => setTitle(e.target.value)} type="text" name="floating_first_name" id={`floating_first_name_${index}`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor={`floating_first_name_${index}`} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input value={post.author} onChange={(e) => setAuthor(e.target.value)} type="text" name="floating_last_name" id={`floating_last_name_${index}`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor={`floating_last_name_${index}`} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea value={post.content} onChange={(e) => setContent(e.target.value)} type="email" name="floating_email" id={`floating_email_${index}`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " rows={6} required />
                <label htmlFor={`floating_email_${index}`} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
              </div>
            </div>))}
          <div className="flex justify-around">
            <div>
              <button
                type="button"
                onClick={addPost}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              >
                Add Another Post
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Posts
              </button>
            </div>
          </div>


        </form>
      </div>
    </div>
  </>
  );
}
