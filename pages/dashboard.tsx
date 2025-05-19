import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data?.user) {
        router.push('/login');
      } else {
        setUserEmail(data.user.email);
        setLoading(false);
      }
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Welcome to Macro5™</h1>
      <p>Logged in as <strong>{userEmail}</strong></p>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}
