import React, { useEffect, useState } from "react";
import { getConditions } from "../../src/requests";

export default function Home() {
  interface response {
    meta: object;
    entry: unknown[];
  }
  const [fhirJson, setFhirJson] = useState<response>();
  useEffect(() => {
    try {
      const windowAccessToken = window.localStorage.getItem("accessToken");
      const windowPatientId = window.localStorage.getItem("patientId");
      getConditions(`${windowPatientId}`, `${windowAccessToken}`).then((json) =>
        setFhirJson(json as response)
      );
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
