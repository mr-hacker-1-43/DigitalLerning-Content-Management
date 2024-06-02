// pages/admin.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Fetch admin data or redirect if not authenticated
    const fetchAdmin = async () => {
      // Mock authentication check
      const isAdmin = true; // Replace with real admin check
      if (!isAdmin) {
        router.push('/login');
      } else {
        setAdmin({ name: 'Rajesh Chaurasiya', email: 'rajesh@earnmore.com' });
      }
    };

    fetchAdmin();
  }, [router]);

  if (!admin) return <div>Loading...</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {admin.name}</p>
      {/* Add admin management tools here */}
    </div>
  );
}
