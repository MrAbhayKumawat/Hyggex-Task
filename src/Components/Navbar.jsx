import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhkxrV_4gk499OFUWXTChAXqcNbFCPOAZy-aGreK631RXIxTVqz96Xo-uxlnL36Be1TsJd-YSmMN-dp3GIL-xJ4d_U-GRp0lRs92ViZG3wgFH9JA53CQGTOyeCj8_8E-_AE0TnFP-X20SApwznnEqjYmK3bTPpHnetGpHfBi6LG8mtEwX1OwyybY7vtbkS5"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>

          <div className="block md:hidden">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle mobile menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={` ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 items-center border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row  md:mt-0 md:border-0 text-black">
              <li>
                <a href="#" className="block py-2 px-3 md:p-0" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0">
                  Flashcard
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0">
                  FAQ
                </a>
              </li>
       
              <button
                type="button"
                className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-10"
              >
                Get started
              </button>
  
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
