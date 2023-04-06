import { useState } from 'react';
import axios from 'axios';
import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';

(passport.use as any)(
  new TwitterStrategy(
    {
        consumerKey: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY!,
        consumerSecret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET!,
        callbackURL: '/api/auth/twitter/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      // Save the access token and profile to the session
      const user = { accessToken, profile };
      return cb(null, user);
    }
  )
);

export default function LoginPage() {
  const [message, setMessage] = useState<string | null>(null);

  const handleLogin = async () => {
      try {

      const res = await axios.get('/api/auth/twitter');
      window.location.href = res.data;
    } catch (error) {
      console.error(error);
      setMessage('Error occurred while trying to log in.');
    }
  };

  return (
    <div>
      {message && <div>{message}</div>}
      <button onClick={handleLogin}>Log in with Twitter</button>
    </div>
  );
}
