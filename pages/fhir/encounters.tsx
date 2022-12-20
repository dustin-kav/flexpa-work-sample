import React, { useEffect, useState } from "react";

export default function Home() {
  interface response {
    meta: object;
    entry: unknown[];
  }
  const [fhirJson, setFhirJson] = useState<response>();
  const getEncounters = async (patientId: string, accessToken: string) => {
    const response = await fetch(`/api/fhir/conditions?patient=${patientId}`, {
      method: "GET",
      headers: {
        "Access-Token": `${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setFhirJson(data.data);
  };
  useEffect(() => {
    try {
      const windowAccessToken = window.localStorage.getItem("accessToken");
      const windowPatientId = window.localStorage.getItem("patientId");
      getEncounters(`${windowPatientId}`, `${windowAccessToken}`);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div>
        <pre>{fhirJson && JSON.stringify(fhirJson.entry, null, 2)}</pre>
      </div>
    </>
  );
}
