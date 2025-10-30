"use client";
import React, { useState } from "react";
import { Flex } from "@radix-ui/themes";
import { MenuIcon, XIcon } from "lucide-react";
import MLHBanner from "./mlh";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarButtons = [
    { label: "Apply", href: "https://my.hackprinceton.com/" },
    { label: "About", href: "#about" },
    { label: "Tracks", href: "#tracks" },
    { label: "FAQ", href: "#faq" },
    { label: "Contributors", href: "#contributors" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <nav className="fixed top-0 py-1 left-0 w-full z-50 font-primary bg-primary/80 backdrop-blur-md border-b-2 border-secondary">
      {/* Logo Section */}
      <Flex justify="center" align="center" className="w-full relative">
        <Flex
          align="center"
          className="z-20 my-3 max-w-7xl w-full px-8 h-12 relative"
        >
          <a href="#" className="relative mr-auto h-full flex items-center">
            {/* Logo */}
            <Image
              src="/images/logos/hackprinceton_logo_primary.png"
              alt="HackPrinceton Logo"
              className="relative h-full py-1 w-auto z-20"
              height={64}
              width={64}
            />
            <span className="text-sm w-min sm:w-auto sm:text-2xl pl-2 font-bold ml-2 text-foreground">
              HackPrinceton <span className="font-extralight">Template</span>
              {/* <span className="text-sm ml-1 align-top">20XX</span> */}
              <span className="bg-secondary p-0.5 sm:p-1 text-xs sm:text-sm rounded-xl px-1 sm:px-2 ml-1 align-top">
                20XX
              </span>
            </span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden ml-auto bg-primary border-2 border-secondary rounded-lg p-1 flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-foreground focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navbar Buttons for Desktop */}
          <div className="hidden lg:flex ml-8 mr-24">
            {navbarButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className="border-2 hover:bg-secondary hover:scale-[1.05] transition-all border-secondary rounded-xl py-1 px-3 text-foreground bg-primary font-bold text-base mx-2"
              >
                {button.label}
              </a>
            ))}
          </div>
          <div className="absolute z-[-5] transition-all top-[-1rem] right-4 w-auto hidden lg:inline">
            <MLHBanner />
          </div>
        </Flex>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden z-10 bg-primary w-full absolute top-full left-0 shadow-lg transition-all border-b-2 border-secondary">
            <Flex align="center" className="pb-4 pt-4 flex-col">
              {navbarButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-xl px-4 text-foreground font-bold hover:bg-secondary transition-all w-full text-center"
                >
                  {button.label}
                </a>
              ))}
            </Flex>
          </div>
        )}
        <div className="absolute z-[-5] transition-all top-[4.9rem] right-4 w-auto inline  lg:hidden">
          <MLHBanner />
        </div>
      </Flex>
    </nav>
  );
};

export default Navbar;
