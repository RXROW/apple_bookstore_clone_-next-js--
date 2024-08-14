import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Link from "next/link";
 
export function DefaultHeader() {
  return (
    <Navbar>
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Book Store
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/about">
 
            About
         
        </NavbarLink>
        <NavbarLink href="/services">
          Services
        </NavbarLink>
        <NavbarLink href="/contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
      <DarkThemeToggle />
    </Navbar>
  );
}


export function DefaultFooter() {
  return (
    <Footer container className="rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold">Book Store</h1>
          <FooterLinkGroup>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/services">Services</FooterLink>

            <FooterLink href="/contact">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Xrow" year={2024} />
      </div>
    </Footer>
  );
}
