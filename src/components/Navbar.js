// components/Navbar.js
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar isBordered maxWidth="full" className="bg-[#0a0c1a] text-white w-full">
      <NavbarBrand>
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#d8b4fe]" style={{ fontFamily: "'Dancing Script', cursive" }}>
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
            href="https://drive.google.com/file/d/1llsLqF-0HTSlhaWuHKfwhS9oxJoC0lGL/view?usp=sharing"
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
