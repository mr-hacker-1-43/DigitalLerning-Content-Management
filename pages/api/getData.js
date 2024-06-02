// pages/api/getData.js
import clientPromise from '../../lib/mongodb';
import mongoose from 'mongoose'

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('blogsDataBase');

    const data = await db.collection('users').find({}).toArray();

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
