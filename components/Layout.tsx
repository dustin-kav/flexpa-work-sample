import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    {
      id: 1,
      href: "/",
      title: "Homepage",
    },
    {
      id: 2,
      href: "/fhir/careTeam",
      title: "Care Team",
    },
    {
      id: 3,
      href: "/fhir/conditions",
      title: "Conditions",
    },
    {
      id: 4,
      href: "/fhir/coverage",
      title: "Cooverage",
    },
    {
      id: 5,
      href: "/fhir/diagnosticReports",
      title: "Diagnostic Reports",
    },
    {
      id: 6,
      href: "/fhir/encounters",
      title: "Encounters",
    },
    {
      id: 7,
      href: "/fhir/explanationOfBenefits",
      title: "Explanation Of Benefits",
    },
    {
      id: 8,
      href: "/fhir/observations",
      title: "Observations",
    },
    {
      id: 9,
      href: "/fhir/procedures",
      title: "Procedures",
    },
  ];

  return (
    <div className="h-screen flex flex-row justify-start">
      <div className="bg-primary flex-1 p-4 text-white">
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-500 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
            Your digital health app
          </header>
          <div className="flex flex-col md:flex-row flex-1">
            <aside className="bg-blue-100 w-full md:w-60">
              <nav>
                <ul>
                  {menuItems.map(({ href, title }) => (
                    <li className="m-2" key={title}>
                      <Link
                        href={href}
                        className={`flex p-2 bg-blue-500 rounded hover:bg-blue-700 cursor-pointer`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
