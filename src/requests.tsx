export const getAccessToken = async (
  publicToken: string
): Promise<string | undefined> => {
  // need to hit the next exchange api to have access to secrets
  const exchangeResp = await fetch("/api/link/exchange", {
    method: "POST",
    body: JSON.stringify({
      public_token: publicToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await exchangeResp.json();
  return data.data.access_token;
};
