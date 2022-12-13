// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(400).json({ data: "Invalid request method" });
    return;
  }
  const accessToken = req.headers["access-token"];

  // Make request to Flexpa API endpoint
  const flexpaResponse = await fetch("https://api.flexpa.com/link/introspect", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  res.status(await flexpaResponse.status);

  if ((await flexpaResponse.status) !== 200) {
    // Error from Flexpa API
    res.json({ data: flexpaResponse.statusText });
  } else {
    // Success from Flexpa API
    try {
      const d = await flexpaResponse.json();

      // Success parsing JSON
      res.json({ data: await d });
    } catch {
      // Error parsing JSON
      res.json({ data: "Malformed JSON in API response" });
    }
  }
}
