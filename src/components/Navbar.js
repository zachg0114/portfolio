import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar
      isBordered
      maxWidth="full"
      className="bg-[#0a0c1a] text-white w-full overflow-hidden"
    >
      <NavbarBrand>
        <Link href="/">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Zachary Greene
          </h1>
        </Link>
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className="flex-wrap space-x-2 text-sm sm:text-base"
      >
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <a
            href="https://drive.google.com/file/d/1fxjLNMYXmz_nkYEnqLHqEGXVwtJiV2Mz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
