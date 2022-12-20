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

export const getPatientId = async (at: string): Promise<string | undefined> => {
  const response = await fetch("/api/link/introspect", {
    method: "POST",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const regex = new RegExp("([^/]+$)");
  console.log(data.data.sub);
  const patientId = data.data.sub && data.data.sub.match(regex)[0];
  console.log(patientId);
  return patientId;
};
