export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a href="/resources" className="justify-between">
                Resources
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="/resources/case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="/resources/content">Content</a>
                </li>
                <li>
                  <a href="/resources/notes">Notes</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a href="/services" className="justify-between">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="/services/web-development">Case Studies</a>
                </li>
                <li>
                  <a href="/services/marketing">Marketing</a>
                </li>
                <li>
                  <a href="/services/graphic-design">Graphic Design</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li tabIndex={0}>
            <a href="/resources">
              Resources
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a href="/resources/case-studies">Case Studies</a>
              </li>
              <li>
                <a href="/resources/content">Content</a>
              </li>
              <li>
                <a href="/resources/notes">Notes</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a href="/services">
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a href="/services/web-dev">Web Development</a>
              </li>
              <li>
                <a href="/services/marketing">Marketing</a>
              </li>
              <li>
                <a href="/services/graphic-design">Graphic Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/contact" className="btn">Contact Me</a>
      </div>
    </div>
  );
}
