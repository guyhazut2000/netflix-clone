"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NetflixLogo from "../public/netflix-logo.png";
import UserProfile from "../public/user-profile.png";
import { Input } from "./ui/input";
// icons
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { InputClosable } from "./ui/InputClosable";

function Navbar() {
  // Navbar links
  const navLinks = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
  ].map((link, index) => {
    return (
      <li className="mx-3 cursor-pointer hover:opacity-80" key={index}>
        {link}
      </li>
    );
  });

  // Search input
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [scrollY, setScrollY] = useState(0);

  // Toggle input element
  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-screen z-10 ${
        scrollY > 0 ? " bg-black" : " bg-transparent"
      }`}
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
      }}
    >
      <div className="h-[68px] flex justify-between text-white mx-10">
        <div className="flex justify-center items-center gap-4 mx-6 my-3">
          {/* Left - netflix logo */}
          <Link href={"/"}>
            <Image
              src={NetflixLogo}
              alt="netflix-logo"
              width={40}
              height={40}
            />
          </Link>
          {/* Center - ul nav links  */}
          <ul className="flex justify-center items-center">{navLinks}</ul>
        </div>
        {/* Right - search, notifications and user profile */}
        <div className="flex justify-center items-center gap-4 mx-6 my-3">
          <div className="search-container flex justify-center items-center gap-2 ">
            <AiOutlineSearch
              className="search-icon w-8 h-8 cursor-pointer"
              onClick={() => {
                toggleInputVisibility();
              }}
            />
            {isInputVisible && (
              <InputClosable
                className="search-input"
                theme="dark"
                ref={inputRef}
                placeholder="Search..."
              />
            )}
          </div>
          <IoMdNotificationsOutline className="w-8 h-8 cursor-pointer" />
          <Image
            className="cursor-pointer"
            src={UserProfile}
            alt="user-profile"
            width={32}
            height={32}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
