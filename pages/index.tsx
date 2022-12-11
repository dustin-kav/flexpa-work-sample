import styles from "../styles/Home.module.css";
import { FlexpaConfig } from "../src/flexpa_types";
import { useEffect, useState } from "react";

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

export default function Home() {
  useEffect(() => {
    try {
      FlexpaLink?.create({
        publishableKey: "pk_test_vbg6AKwO40LqUmc0W6gqoZ83RqWyZL6gdtLu4qiPt6M",
        onSuccess: (publicToken) => {
          console.log(publicToken);
        },
      });
      FlexpaLink?.open();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        <script src="https://js.flexpa.com/v1/" async={true} />
      </div>
    </>
  );
}
