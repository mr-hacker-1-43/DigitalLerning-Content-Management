// pages/api/addUser.js
import { encryptPassword } from "@/lib/cryptp";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      // const client = await clientPromise;
      // const db = client.db('blogsDataBase');

      const { fastName, lastName, email, password, cityDist, state, pinCode } = req.body;

      // Input validation
      if (!fastName || !email || !lastName || !password || !cityDist || !state || !pinCode) {
        return res.status(400).json({ message: 'Name and email are required' });
      };

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' })
      };

      // Encrypt the password
      //const encryptedPassword = encryptPassword(password);

      // create a new user 
      const newUser = new User({ fastName, lastName, email, password: encryptPassword(password), cityDist, state, pinCode });
      await newUser.save();
      res.status(201).json({ message: 'User added successfully' });

      // const newUser = { fastName, lastName, email, password, cityDist, state, pinCode, createdAt: new Date() };
      // const result = await db.collection('users').insertOne(newUser);
      // res.status(201).json({ message: 'User added successfully', userId: result.insertedId });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Failed to add user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
