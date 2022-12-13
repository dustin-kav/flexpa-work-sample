// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 import type { NextApiRequest, NextApiResponse } from "next";

// export const getPatientId = async (at: string): Promise<string | undefined> => {
//   const response = await fetch("/api/link/introspect", {
//     method: "POST",
//     headers: {
//       "Access-Token": at,
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   const regex = new RegExp("([^/]+$)");
//   const patientId = data.data.sub && data.data.sub.match(regex)[0];
//   // console.log({ patientId })
//   return patientId;
// };

// export default function explanationOfBenefits({ explanationOfBenefits }) {

export default function explanationOfBenefits() {
  console.log('im in here');

  return (
    <div>
      hey
    </div>
  )
  // Render posts...
}

// // This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const explanationOfBenefits = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       explanationOfBenefits,
//     },
//   }
// }