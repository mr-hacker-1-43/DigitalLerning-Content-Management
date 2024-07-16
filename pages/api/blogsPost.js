import connectToDatabase from "@/lib/mongoose";
import Blogs from "@/models/Blogs";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const posts = req.body.Blogs;

    if (!Array.isArray(posts) || posts.length === 0) {
      return res.status(400).json({ message: 'An array of posts is required' });
    }

    // Check if all posts have the required fields
    for (const post of posts) {
      if (!post.title || !post.content) {
        return res.status(400).json({ message: 'Each post must have a title and content' });
      }
    }

    const { db } = await connectToDatabase();

    try {
      const result = await db.collection('Blogs').insertMany(
        posts.map(post => ({
          ...post,
          createdAt: new Date(),
        }))
      );

      res.status(201).json(result.ops);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create posts' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
