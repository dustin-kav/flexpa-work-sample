// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{data: string}>
) {
  if (req.method !== 'POST') {
    res.status(400).json({ data: 'Invalid request method' })
    return
  }
  const publicToken: string = req.body.public_token
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  console.log(secretKey);

  // Make request to Flexpa API endpoint
  const flexpaResponse = await fetch('https://api.flexpa.com/link/exchange', {
    method: 'POST',
    body: JSON.stringify({ 
      'public_token': publicToken,
      'secret_key': secretKey,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(JSON.stringify(flexpaResponse, null, 2));

  res.status(flexpaResponse.status)

  if (flexpaResponse.status !== 200) {
    // Error from Flexpa API
    res.json({ data: flexpaResponse.statusText })
  }
  else {
    // Success from Flexpa API
    try {
      const d = await flexpaResponse.json()

      // Success parsing JSON
      res.json({ data: await d })
    }
    catch {

      // Error parsing JSON
      res.json({ data: 'Malformed JSON in API response' })
    }
  }
}