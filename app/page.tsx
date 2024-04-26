"use client";
import Image from "next/image";
import { SetStateAction, useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function Home() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const thumbnailsRef = useRef(null);
  const [hoveredLetter, setHoveredLetter] = useState("");
  const handleMouseEnter = (letter: SetStateAction<string>) => {
    setHoveredLetter(letter);
  };
  const handleMouseLeave = () => {
    setHoveredLetter("");
  };
  const text = "I built things for the web.";
  const name = "John Paul Quintana.";
  const subTitle = "Hi, my name is";
  const content = `With proficiency in both front-end and back-end development, 
                  I specialize in crafting polished and responsive web applications. 
                  Leveraging a blend of creativity and technical expertise, 
                  Im dedicated to delivering solutions that meet and exceed client expectations.`;
  const projects = "Projects";
  return (
    <main className="ml-[6.3em] bg-gradient-to-r from-slate-950 via-green-950 to-slate-950 flex flex-col gap-10">

      <div className="h-screen flex items-center justify-center flex-col md:flex-row p-5 md:p-10 gap-2 mb-4">
        <div className="px-2 md:px-10 py-10 md:py-10 w-full">
          <div className="mb-2">
            <h2 className="text-teal-300 text-[18px] font-medium md:text-xl hover:cursor-pointer">
              {subTitle.split("").map((letter, index) => (
                <span
                  key={index}
                  onMouseEnter={() => handleMouseEnter(`${letter}_${index}`)}
                  onMouseLeave={handleMouseLeave}
                  className={
                    hoveredLetter === `${letter}_${index}`
                      ? "text-teal-100"
                      : ""
                  }
                >
                  {letter}
                </span>
              ))}
            </h2>
          </div>
          <div className="">
            <h1 className="text-slate-200 text-[18px] md:text-5xl font-bold tracking-wider mb-2 hover:cursor-pointer">
              {name.split("").map((letter, index) => (
                <span
                  key={index}
                  onMouseEnter={() => handleMouseEnter(`${letter}_${index}`)}
                  onMouseLeave={handleMouseLeave}
                  className={
                    hoveredLetter === `${letter}_${index}`
                      ? "text-teal-300"
                      : ""
                  }
                >
                  {letter}
                </span>
              ))}
            </h1>
            <h2 className="text-slate-400 text-[18px] md:text-4xl font-bold tracking-wider mb-5 hover:cursor-pointer">
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  onMouseEnter={() => handleMouseEnter(`${letter}_${index}`)}
                  onMouseLeave={handleMouseLeave}
                  className={
                    hoveredLetter === `${letter}_${index}`
                      ? "text-teal-300"
                      : ""
                  }
                >
                  {letter}
                </span>
              ))}
            </h2>
            <p className="text-slate-300 text-sm mb-5 tracking-wide hover:cursor-pointer">
              {content.split("").map((letter, index) => (
                <span
                  key={index}
                  onMouseEnter={() => handleMouseEnter(`${letter}_${index}`)}
                  onMouseLeave={handleMouseLeave}
                  className={
                    hoveredLetter === `${letter}_${index}`
                      ? "text-teal-300 font-bold pr-1"
                      : ""
                  }
                >
                  {letter}
                </span>
              ))}
            </p>
          </div>
          <div className="flex justify-between gap-2">
            <button
              type="button"
              className="bg-teal-500 text-sm text-slate-50 p-2 w-full rounded-xl font-bold tracking-wider hover:bg-teal-700"
            >
              Contact Me
            </button>
            <button
              type="button"
              className="bg-teal-500 text-sm text-slate-50 p-2 w-full rounded-xl font-bold tracking-wider hover:bg-teal-700"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="p-2 w-full flex justify-center relative group">
          <div className="w-[200px] h-[200px] left-[15px] -top-1 md:w-[300px] md:h-[320px] md:left-[142px] md:-top-0.5 absolute bg-slate-100 z-10 rounded-sm md:group-hover:-rotate-45 transition"></div>
          <div className="w-[200px] h-[200px] right-[15px] -bottom-1 md:w-[300px] md:h-[320px] md:right-[142px] md:-bottom-0.5 absolute bg-teal-300 z-10 rounded-sm md:group-hover:rotate-45 transition"></div>
          <Image
            src="/images/profile.png"
            alt="profile image"
            width={300}
            height={320}
            className="border-0 rounded-sm w-[200px] h-[200px] md:w-[300px] md:h-[320px] z-20 bg-gradient-to-r from-slate-950 via-green-950 to-slate-950 transition md:group-hover:scale-90 md:group-hover:bg-none"
          />
        </div>
      </div>

      <div className="h-screen">
        <div className="px-2 md:px-10 py-5 md:py-10 w-full">
          <h2 className="text-teal-300 text-[18px] font-medium md:text-xl hover:cursor-pointer mb-2">
            {projects.split("").map((letter, index) => (
              <span
                key={index}
                onMouseEnter={() => handleMouseEnter(`${letter}_${index}`)}
                onMouseLeave={handleMouseLeave}
                className={
                  hoveredLetter === `${letter}_${index}` ? "text-teal-100" : ""
                }
              >
                {letter}
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
            <div className="hover:cursor-pointer text-center group" onClick={() => setOpen1(true)}>
            <Image
                src="/images/kiosk.png"
                alt="profile image"
                width={300}
                height={300}
                className="border-0 group-hover:scale-x-75 rounded-sm w-full z-20 bg-gradient-to-r from-slate-950 via-green-950 to-slate-950 transition md:group-hover:scale-90 md:group-hover:bg-none"
              />
              <h2 className="text-teal-300">Exousia Navi Empowering Campus Navigation</h2>
            </div>
            <div className="hover:cursor-pointer text-center group" onClick={() => setOpen2(true)}>
            <Image
                src="/images/document.png"
                alt="profile image"
                width={300}
                height={320}
                className="border-0 group-hover:scale-x-75 rounded-sm w-full z-20 bg-gradient-to-r from-slate-950 via-green-950 to-slate-950 transition md:group-hover:scale-90 md:group-hover:bg-none"
              />
              <h2 className="text-teal-300">Document Tracking Web Application</h2>
            </div>
            <div className="hover:cursor-pointer text-center group" onClick={() => setOpen3(true)}>
            <Image
                src="/images/inventory.png"
                alt="profile image"
                width={300}
                height={320}
                className="border-0 group-hover:scale-x-75 rounded-sm w-full z-20 bg-gradient-to-r from-slate-950 via-green-950 to-slate-950 transition md:group-hover:scale-90 md:group-hover:bg-none"
              />
              <h2 className="text-teal-300">Inventory Management System with facial Recognition Attendance and AI Assistant</h2>
            </div>
          </div>
          {/* <button type="button" onClick={() => setOpen1(true)}>
            Open Lightbox
          </button> */}
          {/* open 1 */}
          <Lightbox
            plugins={[Captions]}
            open={open1}
            close={() => setOpen1(false)}
            slides={[
              {
                src: "/images/project.png",
                title: "First Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "First Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "First Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "First Projects",
                description: "Slide description",
              },
              // ...
            ]}
          />
          {/* open 2 */}
          <Lightbox
            plugins={[Captions]}
            open={open2}
            close={() => setOpen2(false)}
            slides={[
              {
                src: "/images/project.png",
                title: "Second Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "Second Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "Second Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "Second Projects",
                description: "Slide description",
              },
              // ...
            ]}
          />
          {/* open 3 */}
          <Lightbox
            plugins={[Captions]}
            open={open3}
            close={() => setOpen3(false)}
            slides={[
              {
                src: "/images/project.png",
                title: "Third Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "Third Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "Third Projects",
                description: "Slide description",
              },
              {
                src: "/images/project.png",
                title: "Third Projects",
                description: "Slide description",
              },
              // ...
            ]}
          />
        </div>
      </div>
    </main>
  );
}
