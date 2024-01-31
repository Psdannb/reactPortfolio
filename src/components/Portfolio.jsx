import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import js from "../assets/javaScript.png";
import react from "../assets/react.png";
const Portfolio = () => {
  const data = [
    {
      id: 1,
      src: html,
      link: "https://dbexpensetracker.netlify.app/",
    },
    {
      id: 2,
      src: css,
    },
    {
      id: 3,
      src: js,
    },
    {
      id: 4,
      src: react,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            PortFolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {data.map(({ id, src, link }) => (
            <div key={id} className="shadow-md rounded-lg shadow-gray-600 ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <a
                  href={link}
                  target="_blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                >
                  <button className=" border rounded-md px-2 py-1 hover:border-blue-500 hover:text-blue-600">
                    Demo
                  </button>
                </a>
                <a
                  href=""
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                >
                  <button className=" border rounded-md px-2 py-1 hover:border-blue-500 hover:text-blue-600">
                    About
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
