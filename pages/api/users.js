const { default: connectToDatabase } = require("@/lib/mongoose");
const { default: User } = require("@/models/User");


const users = async (req, res) => {
    if (req.method === 'GET') {
        try {
            await connectToDatabase();
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`method $(req.method) not Allowed`);

    }

}

export default users