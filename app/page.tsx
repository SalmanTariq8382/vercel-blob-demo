'use client';

import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [responseUrl, setResponseUrl] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({ username }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (res.ok) {
      setResponseUrl(data.url);
    } else {
      alert(data.error);
    }
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Save Username to Vercel Blob</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: 10, marginRight: 10 }}
      />
      <button onClick={handleSubmit} style={{ padding: 10 }}>
        Submit
      </button>
      {responseUrl && (
        <div style={{ marginTop: 20 }}>
          <p>Saved! View here:</p>
          <a href={responseUrl} target="_blank" rel="noopener noreferrer">
            {responseUrl}
          </a>
        </div>
      )}
    </main>
  );
}
