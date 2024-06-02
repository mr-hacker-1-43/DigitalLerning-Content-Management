// pages/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data or redirect if not authenticated
    const fetchUser = async () => {
      // Mock authentication check
      const loggedIn = true; // Replace with real authentication check
      if (!loggedIn) {
        router.push('/login');
      } else {
        setUser({ name: 'Rajesh Chaurasiya', email: 'rajesh@earnmore.com' });
      }
    };

    fetchUser();
  }, [router]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Your email: {user.email}</p>
      {/* Add more personalized content here */}
    </div>
  );
}
