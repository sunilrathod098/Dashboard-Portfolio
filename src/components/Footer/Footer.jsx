import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 border-y z-50 bottom-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-9 md:mb-0">
            <Link to="/" className="flex flex-auto items-center">
              <img
                src="/profilelogofile.jpg"
                className="mr-10 h-20"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-10 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-7 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/sunilrathod098"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our GitHub"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline" aria-label="Join our Discord">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline" aria-label="Read our Privacy Policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline" aria-label="Read our Terms & Conditions">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-10 border-gray-200 sm:mx-auto lg:my-5" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2024
            <a
              href="https://github.com/sunilrathod098"
              className="hover:underline"
            >
              _ Sunil Rathod
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* Social Media Icons */}
            <Link to="#" className="text-blue-700 hover:text-blue-700" aria-label="Visit our Facebook page">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link to="#" className="text-blue-700" aria-label="Join our Discord community">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </Link>
            <Link to="https://x.com/RajputhRathod" className="text-blue-400" aria-label="Follow us on Twitter">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.114 4.135c0 .325.037.643.107.944-3.416-.17-6.45-1.807-8.48-4.283A4.085 4.085 0 0 0 .872 4.67c0 1.464.741 2.762 1.88 3.522a4.144 4.144 0 0 1-1.868-.516v.052c0 2.992 2.125 5.498 4.95 6.073a4.07 4.07 0 0 1-1.865.07c.523 1.628 2.05 2.8 3.85 2.83a8.315 8.315 0 0 1-5.062 1.757c.367 1.378 1.442 2.374 2.726 2.4a8.317 8.317 0 0 0 8.58-8.418c0-.128-.004-.254-.012-.38a6.032 6.032 0 0 0 1.484-1.496Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link
                  to="https://github.com/sunilrathod098"
                  className="text-white"
                  aria-label="Follow us on GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.29 3.44 9.8 8.17 11.4.6.11.82-.26.82-.57v-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.5 1.01.1-.77.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.21-.12-.3-.54-1.47.11-3.05 0 0 1.01-.32 3.32 1.24.97-.27 2.01-.39 3.03-.39s2.06.13 3.03.39c2.31-1.56 3.32-1.24 3.32-1.24.66 1.58.23 2.75.11 3.05.77.83 1.24 1.9 1.24 3.21 0 4.61-2.81 5.64-5.48 5.94.43.36.81 1.09.81 2.2v3.3c0 .31.22.69.83.57 4.73-1.6 8.17-6.11 8.17-11.4 0-6.63-5.37-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
