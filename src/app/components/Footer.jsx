import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram.png";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white flex flex-col items-center">
      <div className="container p-12 flex justify-between">
        <span>Let’s Work Together</span>
         <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ramjan18">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ramjan-nadaf18/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ramjan-nadaf18/" className=" rounded-md">
            <Image src={InstagramIcon} className=" rounded-lg" width={43} height={43} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="text-[#ADB7BE]">
        <hr />
        © Ramjan Nadaf
      </div>
    </footer>
  );
};

export default Footer;
