import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Header() {
  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "UI Design",
      link: "https://walcart.reviewsheeter.com/",
    },
    {
      title: "Flexbox",
      link: "/flexbox/flexBox",
    },
    {
      title: "Redux",
      link: "/redux/reduxText",
    },
    {
      title: "API",
      link: "/coin/coins",
    },
    {
      title: "GraphQL",
      link: "/api/graphql",
    },
    {
      title: "My Design",
      link: "/redux/reduxText",

      submenus: [
        {
          title: "Sub 01",
          link: "#",
        },
        {
          title: "Sub 02",
          link: "#",
        },
        {
          title: "Sub 03",
          link: "#",

          lastSubmenus: [
            {
              title: "Drop 01",
              link: "#",
            },
            {
              title: "Drop 02",
              link: "#",
            },
            {
              title: "Drop 03",
              link: "#",
            },
            {
              title: "Drop 04",
              link: "#",
            },
          ],
        },
        {
          title: "Sub 04",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className={styles.header_main}>
      <ul>
        {menus.map((menu) => {
          return (
            <li>
              <Link href={menu.link}>
                <a>{menu.title}</a>
              </Link>

              {menu.submenus && menu.submenus.length > 0 && (
                <ul>
                  {menu.submenus.map((submenu) => {
                    return (
                      <li>
                        <Link href={submenu.title}>
                          <a>{submenu.title}</a>
                        </Link>

                        {submenu.lastSubmenus &&
                          submenu.lastSubmenus.length > 0 && (
                            <ul>
                              {submenu.lastSubmenus.map((lastSubmenu) => {
                                return (
                                  <li>
                                    <Link href={lastSubmenu.link}>
                                      <a>{lastSubmenu.title}</a>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
