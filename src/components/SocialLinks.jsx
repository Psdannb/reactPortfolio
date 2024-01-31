import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Psdannb",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <CiMail size={30} />
        </>
      ),
      href: "mailto:psdannb@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((dataItem) => (
          <li
            key={dataItem.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              dataItem.style
            }
          >
            <a
              href={dataItem.href}
              className="flex justify-between items-center w-full text-white"
              download={dataItem.download}
              target="_blank"
              rel="noreferrer"
            >
              {dataItem.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
