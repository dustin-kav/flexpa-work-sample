import { FlexpaConfig } from "../src/flexpaTypes";
import { useEffect, useState } from "react";
import { getAccessToken } from "../src/requests";

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

export default function Home() {
  const publicToken = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const [accessToken, setAccessToken] = useState<string | undefined>();
  useEffect(() => {
    try {
      FlexpaLink?.create({
        publishableKey: `${publicToken}`,
        onSuccess: async (publicToken) => {
          const at = await getAccessToken(`${publicToken}`);
          setAccessToken(at);
          console.log(accessToken);
        },
      });
      FlexpaLink.open();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        <script src="https://js.flexpa.com/v1/" async={true} key="asdf" />
      </div>
    </>
  );
}
