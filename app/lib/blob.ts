import { put, list } from '@vercel/blob';

export async function saveUsername(name: string) {
  const fileName = `username-${Date.now()}.txt`;
  const blob = await put(fileName, name, {
    access: 'public',
  });
  return blob;
}

export async function getSavedUsernames() {
  const blobs = await list();
  return blobs.blobs;
}
