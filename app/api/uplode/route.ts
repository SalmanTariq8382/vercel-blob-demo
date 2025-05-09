import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username } = await req.json();

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  const blob = await put(`usernames/${Date.now()}.txt`, Buffer.from(username), {
    access: 'public',
  });

  return NextResponse.json({ url: blob.url });
}
