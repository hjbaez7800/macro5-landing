import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace('/login');
      } else {
        setUserEmail(data.session.user.email);
        setLoading(false);
      }
    };

    getSession();
  }, [router]);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h1>Welcome to Macro5™</h1>
      <p>You're logged in as: {userEmail}</p>
    </div>
  );
}
