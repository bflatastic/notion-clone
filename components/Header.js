import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.png";
import React, { useState } from "react";
import { Popover } from "@headlessui/react";

const NavItem = (props) => (
  // Menu list items
  <li className="flex items-center justify-center">
    <Link href={props.href}>
      <a className="text-base font-medium text-gray-800 px-2 py-1 hover:bg-gray-100 rounded transition-colors">
        {props.text}
      </a>
    </Link>
  </li>
);

function Header() {
  return (
    <Popover className="relative">
      <div className="w-full bg-white">
        <nav className="flex justify-between items-center wrapper">
          {/* Left Nav */}
          <div className="flex w-full lg:w-auto justify-between lg:justify-start lg:space-x-5 items-center flex-wrap">
            {/* Logo */}
            <div>
              <Link href="/">
                <a className="flex items-center space-x-2">
                  <div className="w-9 h-9">
                    <Image src={Logo} />
                  </div>
                  <span className="text-base1 font-semibold">Notion</span>
                </a>
              </Link>
            </div>
            {/* Mobile Nav */}
            <div className="flex lg:hidden">
              <Popover.Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Popover.Button>
            </div>
            {/* Nav Items */}
            <div className="hidden lg:flex justify-center">
              <ul className="flex flex-col lg:flex-row lg:space-x-2">
                <NavItem href="/product" text="Product" />
                <NavItem href="/solutions" text="Solutions" />
                <NavItem href="/resources" text="Resources" />
                <NavItem href="/download" text="Download" />
                <NavItem href="/pricing" text="Pricing" />
              </ul>
            </div>
            {/* Nav Mobile */}
            <Popover.Panel className="flex w-full lg:hidden justify-center">
              <ul className="flex flex-col lg:flex-row lg:space-x-2">
                <NavItem href="/product" text="Product" />
                <NavItem href="/solutions" text="Solutions" />
                <NavItem href="/resources" text="Resources" />
                <NavItem href="/download" text="Download" />
                <NavItem href="/pricing" text="Pricing" />
              </ul>
            </Popover.Panel>
          </div>
          {/* Right Nav */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-2 items-center">
              <NavItem href="/contact" text="Contact sales" />
              <div className="nav-divider bg-gray-200"></div>
              <NavItem href="/login" text="Log in" />
              <button className="btn btn-primary">Try Notion free</button>
            </ul>
          </div>
        </nav>
      </div>
    </Popover>
  );
}

export default Header;
