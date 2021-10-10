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
      <div className="w-full sticky">
        <nav className="flex mdflex justify-between items-center wrapper">
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
        </nav>
      </div>
    </div>
  );
}

export default Header;
