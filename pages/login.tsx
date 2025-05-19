import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) setError(error.message);
    else setSent(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}>
      <h1>Login to Macro5™</h1>
      {!sent ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 10, marginBottom: 10 }}
          />
          <button type="submit" style={{ padding: 10, width: '100%' }}>
            Send Magic Link
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      ) : (
        <p>Check your email for the magic link!</p>
      )}
    </div>
  );
}
