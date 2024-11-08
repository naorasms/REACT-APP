import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ];
  return (
    <nav>
      <ul>
        {links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
        {/* <li>Home</li>
        <li>About</li>
        <li>Contact</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
