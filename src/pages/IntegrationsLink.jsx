import React, { useEffect, useLayoutEffect } from "react";
import "./IntegrationLink.css";
import { Link, Navigate } from "react-router-dom";
import {integration} from "../data/integrations.js";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useRef } from "react";

export default function IntegrationsLink() {

  const animate = useRef();
  const belowAnimate = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const dataInt = integration.filter((elem) => elem.param === location.pathname.split("/")[2])
  const currentPath = location.pathname.split("/")[2];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(belowAnimate.current, {
          opacity:0,
          y:100,
          duration:1.2,
        });
        gsap.from(animate.current, {
          opacity:0,
          y:100,
          duration:1.2,
        });
      })
      return () => ctx.revert();
    }, [currentPath])



  const handleClick = (link) =>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
    navigate(link);  
  }


  return (
    <>
      {/* Hero Section Starts */}
      <div className="main max-w-[1140px] mx-auto">
        <div className="absolute hero1">
          <div className="integrations"></div>
        </div>

        <div className="header mt-24 sm:ml-14 md:ml-24 lg:ml-16" ref={animate}>
          <div className="flex flex-row container gap-5">
            <div className="image-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <div className="text-xl text-gray-500">{">"}</div>
            <Link to="/"><div className="text-gray-500 cursor-pointer">Integrations</div></Link>
            <div className="text-xl text-gray-500">{">"}</div>
            <div>{currentPath}</div>
          </div>
        </div>

        <div className="tables flex-cols gap-4 mt-15 px-12 py-16 block md:flex lg:flex" ref={belowAnimate}>
          <div className="left-side w-full  flex flex-cols place-content-start gap-4 sticky ssm:w-full sm:w-full">
            <div className="upper flex justify-start items-start">
              <div className="outer-div flex justify-center items-center">
                <img className="logo" src={dataInt[0].logo} alt="image-logo" />
              </div>
              <div className="px-5 py-4 font-semibold text-xl">{dataInt[0].title}</div>
            </div>
            <div className="left-side-info">
              <p>Made by</p>
              <p className="text-gray-500">Worko</p>
            </div>
            <div className="divider"></div>

            <div className="left-side-info">
              <p>Website</p>
              <p className="text-blue-900"><Link to={dataInt[0].website_link}>{dataInt[0].website}</Link></p>
            </div>
            <div className="divider"></div>

            <div className="left-side-info">
              <p>Categories</p>
              {/* <div className="categories" id="box">{dataInt[0].categories}</div> */}
              {dataInt[0].categories === "Communication" && <div className="categories" id="box-green">{dataInt[0].categories}</div>}
              {dataInt[0].categories === "Engineering" && <div className="categories" id="box-yellow">{dataInt[0].categories}</div>}
              {dataInt[0].categories === "Marketing & Design" && <div className="categories" id="box-blue">{dataInt[0].categories}</div>}

            </div>
            <div className="divider"></div>
          </div>
          <div className="right-side w-full">
            <div className="image-holder flex justify-start items-center w-full ms-5 sm:mt-5">
              <img className="w-full" src={dataInt[0].img} alt="" />
            </div>
            <div className="content text-gray-500 text-left mr-9">
             {dataInt[0].img_data}
            </div>
            <div className="columns ms-5 gap-10">
              <div>
                <div className="heading text-2xl font-semibold text-left">
                  Overview
                </div>
                <div className="information mt-2">
                  <p className="text-left text-gray-500">
                    Taskify offers integration with Behance, allowing users to
                    combine their task management and Behance projects
                    effortlessly.
                  </p>
                </div>
              </div>
              <div>
                <div className="heading text-2xl font-semibold text-left">
                  How it Works
                </div>
                <div className="information mt-2">
                  <p className="text-left text-gray-500">
                    Connect your Behance account to Taskify to import your
                    Behance projects as tasks or projects within Taskify.
                    Collaborate with team members on these projects, assign
                    tasks, set deadlines, and improve your project management
                    process.
                  </p>
                </div>
              </div>
              <div>
                <div className="heading text-2xl font-semibold text-left">
                  Configure
                </div>
                <div className="information mt-2">
                  <p className="text-left text-gray-500">
                    Configure the Behance integration in Taskify by connecting
                    your Behance account and importing your projects seamlessly
                    into your Taskify workspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Hero Section Ends */}
        {/* Tables section Starts */}
        <div className="tables mt-28 mb-28">
        <div className="communication flex justify-center items-center gap-40 flex-cols">
          <div className="communication-container flex flex-col">
            <h1 className="relative comm text-gray-400">Check out these other integrations</h1>
            <p className="text-xl text-gray-500 font-normal">
              Seemlessly use your preferred tools for unified work, start to
              finish.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mx-auto tables-columns">
              
              <div className="outer-div flex flex-cols justify-start" onClick={() => handleClick(dataInt[0].link_1)} >
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image-icon flex justify-center items-center">
                      <div className="flex justify-center items-center"><img className="bottom-logo" src={dataInt[0].bottom_symbol1} alt="bottom-image"></img></div>
                    </div>
                  </div>
                  <span className="mx-3 text-gray-300 font-semibold">
                    {dataInt[0].bottom_title1}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="p text-left text-gray-500 font-semibold">
                    {dataInt[0].bottom_info1}
                  </p>
                </div>
              </div>

              <div className="outer-div" onClick={() => handleClick(dataInt[0].link_2)}>
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image-icon flex justify-center items-center">
                      <div className="flex justify-center items-center"><img className="bottom-logo" src={dataInt[0].bottom_symbol2} alt="bottom-image" /></div>
                    </div>
                  </div>
                  <span className="mx-3 text-gray-300 font-semibold">
                    {dataInt[0].bottom_title2}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="p text-left text-gray-500 font-semibold">
                    {dataInt[0].bottom_info2}
                  </p>
                </div>
              </div>

              <div className="outer-div" onClick={() => handleClick(dataInt[0].link_3)}>
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image-icon flex justify-center items-center">
                      <div className="flex justify-center items-center"><img className="bottom-logo" src={dataInt[0].bottom_symbol3} alt="bottom-image" /></div>
                    </div>
                  </div>
                  <span className="mx-3 text-gray-300 font-semibold">
                    {dataInt[0].bottom_title3}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="p text-left text-gray-500 font-semibold">
                    {dataInt[0].bottom_info3}
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
