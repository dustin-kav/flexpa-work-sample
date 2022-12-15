import React, { useEffect, useState } from "react";
import { getMedications } from "../../src/requests";

export default function Home() {
  const [fhirJson, setFhirJson] = useState<object>();
  useEffect(() => {
    try {
      const windowAccessToken = window.localStorage.getItem("accessToken");
      const windowPatientId = window.localStorage.getItem("patientId");
      getMedications(`${windowPatientId}`, `${windowAccessToken}`).then(
        (json) => setFhirJson(json)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        {fhirJson && <>{JSON.stringify(fhirJson, null, 2)}</>}
      </div>
    </>
  );
}
