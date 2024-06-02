// pages/profile.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch user data or redirect if not authenticated
    const fetchUser = async () => {
      // Mock authentication check
      const loggedIn = true; // Replace with real authentication check
      if (!loggedIn) {
        router.push('/login');
      } else {
        const userData = { name: 'Rajesh Chaurasiya', email: 'rajesh@earnmore.com' };
        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
      }
    };

    fetchUser();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update user profile logic here
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}
