import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Check your email for a magic link!');
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center">Login to Macro5™</h1>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          {loading ? 'Sending...' : 'Send Magic Link'}
        </button>
        {message && <p className="text-center text-sm text-gray-600">{message}</p>}
      </form>
    </div>
  );
}
