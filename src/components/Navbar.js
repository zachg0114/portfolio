// components/Navbar.js
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar isBordered maxWidth="lg" className="bg-[#0a0c1a] text-white">
      <NavbarBrand>
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#d8b4fe]">Zach Greene</h1>
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
