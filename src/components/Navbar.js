import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function CustomNavbar() {
  return (
    <Navbar
      isBordered={false} // Remove the border to eliminate the white line
      maxWidth="full"
      className="bg-gradient-to-r from-[#964bde] to-[#532299] text-white w-full overflow-hidden"
    >
      {/* Conditional rendering for the brand name */}
      <div className="hidden sm:block">
        <Link href="/">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap font-semibold text-white">
            Zachary Greene
          </h1>
        </Link>
      </div>

      <NavbarContent
        justify="center sm:end"
        className="flex items-center gap-4 text-sm sm:text-base w-full"
      >
        <div className="flex flex-row sm:justify-end justify-center w-full">
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
        </div>
      </NavbarContent>
    </Navbar>
  );
}
