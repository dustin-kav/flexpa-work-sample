import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
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
          <header className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
            Next.js sidebar menu
          </header>
          <div className="flex flex-col md:flex-row flex-1">
            <aside className="bg-fuchsia-100 w-full md:w-60">
              <nav>
                <ul>
                  {menuItems.map(({ href, title }) => (
                    <li className="m-2" key={title}>
                      <Link
                        href={href}
                        className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer`}
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
