import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async (retryCount = 0) => {
      const { data, error } = await supabase.auth.getSession();
      console.log("SESSION CHECK", data);

      if (error) {
        console.error("Supabase session error:", error.message);
      }

      if (data?.session) {
        router.replace('/dashboard');
      } else if (retryCount < 3) {
        // Retry up to 3 times with delay
        setTimeout(() => checkSession(retryCount + 1), 1500);
      } else {
        router.replace('/login');
      }
    };

    checkSession();
  }, [router]);

  return <p style={{ textAlign: 'center', marginTop: '100px' }}>Authenticating, please wait...</p>;
}
