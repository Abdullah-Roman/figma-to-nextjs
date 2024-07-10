import Link from "next/link";

const data = [
  {
    route: "Home",
    path: "/",
  },
  { route: "Shop", path: "/shop" },
  { route: "Features", path: "/features" },
  {
    route: "Contact",
    path: "/contact",
  },
];

const Nav = ({ className, linkStyle }) => {
  return (
    <nav className={`${className}`}>
      {data.map((value, index) => (
        <Link href={value.path} key={index} className={`${linkStyle}`}>
          {value.route}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
