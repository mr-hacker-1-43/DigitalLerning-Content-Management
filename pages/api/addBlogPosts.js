import connectToDatabase from "@/lib/mongoose";
import Blog from "@/models/Blogs";

export default async function handler(req, res) {
  const { method } = req;
  
// console.log(req);
  await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const blogs = req.body; // expecting an array of blog posts
        const createdBlogs = await Blog.insertMany(blogs);
        res.status(201).json({ success: true, data: createdBlogs });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
