import { FlexpaConfig } from "../src/flexpaTypes";
import React, { useEffect, useState } from "react";
import { getAccessToken, getPatientId } from "../src/requests";

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

export default function Home() {
  const publicToken = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [patientId, setPatientId] = useState<string | undefined>();
  useEffect(() => {
    try {
      const windowAccessToken = window.localStorage.getItem("accessToken");
      windowAccessToken && setAccessToken(windowAccessToken);
      const windowPatientId = window.localStorage.getItem("patientId");
      windowPatientId && setPatientId(windowPatientId);
      if (FlexpaLink && !patientId) {
        FlexpaLink?.create({
          publishableKey: `${publicToken}`,
          onSuccess: (publicToken) => {
            getAccessToken(`${publicToken}`).then(async (at) => {
              setAccessToken(at);
              window.localStorage.setItem("accessToken", `${at}`);
              const patId = await getPatientId(`${at}`);
              setPatientId(patId);
              window.localStorage.setItem("patientId", `${patId}`);
            });
          },
        });
        FlexpaLink.open();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        {(!accessToken || !patientId) && (
          <>
            <script src="https://js.flexpa.com/v1/" async={true} key="asdf" />
          </>
        )}
        {accessToken && <>{`hello, patientId: ${patientId}`}</>}
      </div>
    </>
  );
}
