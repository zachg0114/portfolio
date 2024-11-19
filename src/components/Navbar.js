// components/Navbar.js
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar isBordered maxWidth="full" className="bg-[#0a0c1a] text-white w-full overflow-hidden">
      <NavbarBrand>
        <Link href="/">
          {/* Reduced font size for better fit across all screen sizes */}
          <h1 className="text-xl sm:text-2xl md:text-3xl">
            Zachary Greene
          </h1>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
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
