import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Logo from "../public/images/logo.png";
import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "#", current: true },
  { name: "Solution", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Download", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <Disclosure as="nav" className="relative">
      {({ open }) => (
        <div className="w-full bg-white">
          <div className="flex justify-between items-center wrapper">
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

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden">
                <Disclosure.Button>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* NavBar Desktop */}
              <div className="hidden lg:flex lg:w-auto justify-center">
                <ul className="flex flex-col lg:flex-row lg:space-x-2">
                  {navigation.map((item) => (
                    <li>
                      <Link href={item.href}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "text-base font-medium text-gray-800 px-2 py-1 bg-gray-100 hover:bg-gray-100 rounded transition-colors"
                              : "text-base font-medium text-gray-800 px-2 py-1 hover:bg-gray-100 rounded transition-colors"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Nav */}
            <div className="hidden lg:flex">
              <button className="btn btn-primary ml-4">Try Notion free</button>
            </div>
          </div>

          {/* NavBar Mobile */}
          <Disclosure.Panel>
            <div className="flex w-full lg:hidden justify-center text-center border-b">
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opac  ity-0"
              >
                <ul className="space-y-4 pb-5">
                  {navigation.map((item) => (
                    <li>
                      <Link href={item.href}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "text-base font-medium text-gray-800 px-2 py-1 bg-gray-100 hover:bg-gray-100 rounded transition-colors"
                              : "text-base font-medium text-gray-800 px-2 py-1 hover:bg-gray-100 rounded transition-colors"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Transition>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default Header;
