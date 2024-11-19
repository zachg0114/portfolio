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
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
            Zachary Greene
          </h1>
        </Link>
      </NavbarBrand>
      <NavbarContent
        justify="end"
        className="flex items-center gap-4 flex-nowrap overflow-x-auto whitespace-nowrap text-sm sm:text-base"
      >
        <NavbarItem>
          <Link href="/" className="px-2 sm:px-4">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="px-2 sm:px-4">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a
            href="https://drive.google.com/file/d/1fxjLNMYXmz_nkYEnqLHqEGXVwtJiV2Mz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 sm:px-4"
          >
            View Resume
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
