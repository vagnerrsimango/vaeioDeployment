import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/lib/img/logo-white.svg";
import Menu from "@/lib/img/menu.svg";

const Navbar = () => {
  return (
    <nav className="flexBetween bg-gradient-to-r from-gradient-200 via-blue-400 to-gradient-100 max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src={LogoWhite}
          alt="logo"
          width={74}
          height={29}
          className="ml-16"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Image
        src={Menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:flexCenter mr-16"
      />
    </nav>
  );
};

export default Navbar;
