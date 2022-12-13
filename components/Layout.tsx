import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    {
      id: 1,
      href: "/",
      title: "Homepage",
    },
    {
      id: 2,
      href: "/api/fhir/careTeam",
      title: "Care Team",
    },
    {
      id: 3,
      href: "/api/fhir/conditions",
      title: "Conditions",
    },
    {
      id: 4,
      href: "/api/fhir/coverage",
      title: "Cooverage",
    },
    {
      id: 5,
      href: "/api/fhir/diagnosticReports",
      title: "Diagnostic Reports",
    },
    {
      id: 6,
      href: "/api/fhir/encounters",
      title: "Encounters",
    },
    {
      id: 7,
      href: "/api/fhir/explanationOfBenefits",
      title: "Explanation Of Benefits",
    },
    {
      id: 8,
      href: "/api/fhir/observations",
      title: "Observations",
    },
    {
      id: 9,
      href: "/api/fhir/procedures",
      title: "Procedures",
    },
  ];
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.href === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
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
