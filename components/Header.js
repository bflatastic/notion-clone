import Image from "next/image";
import Logo from "../public/images/logo.png";

const NavItem = (props) => (
  // Menu list items
  <li className="flex items-center">
    <a
      href={props.href}
      className="text-base font-medium text-gray-800 px-2 py-1 hover:bg-gray-100 rounded transition-colors"
    >
      {props.text}
    </a>
  </li>
);

function Header() {
  return (
    <div>
      <div className="w-full bg-white">
        <nav className="flex justify-between items-center wrapper">
          {/* Left Nav */}
          <div className="flex space-x-5 items-center">
            {/* Logo */}
            <div>
              <a className="flex items-center space-x-2" href="/">
                <div className="w-9 h-9">
                  <Image src={Logo} />
                </div>
                <span className="text-base1 font-semibold">Notion</span>
              </a>
            </div>
            {/* Nav Items */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-2">
                <NavItem href="/product" text="Product" />
                <NavItem href="/solutions" text="Solutions" />
                <NavItem href="/resources" text="Resources" />
                <NavItem href="/download" text="Download" />
                <NavItem href="/pricing" text="Pricing" />
              </ul>
            </div>
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
          {/* Mobile Nav */}
          <div className="flex lg:hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
