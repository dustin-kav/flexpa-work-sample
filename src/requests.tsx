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

export const getExplanationOfBenefits = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(
    `/api/fhir/explanationOfBenefits?patient=${id}`,
    {
      method: "GET",
      headers: {
        "Access-Token": at,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data.data;
};

export const getCareTeam = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/careTeam?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getConditions = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/conditions?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getCoverage = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/coverage?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getDiagnosticReports = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/diagnosticReports?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getEncounters = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/encounters?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getMedications = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/medications?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getObservations = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/observations?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getProcedures = async (
  id: string,
  at: string
): Promise<object | undefined> => {
  const response = await fetch(`/api/fhir/procedures?patient=${id}`, {
    method: "GET",
    headers: {
      "Access-Token": at,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};
