import HeroImage from "../assets/final_image.png";
import React from "react";
import "./Integrations.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {integration} from "../data/integrations.js";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Integrations() {
  const animateHome = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(animateHome.current, {
          opacity:0,
          y:100,
          duration:0.6,
        });
      })
      return () => ctx.revert();
    }, [])

  // Show/hide function for communication
  function handleToggle() {
    if (document.getElementsByClassName("outer-div-hide")) {
      console.log(
        "clicked",
        document.getElementsByClassName("outer-div-hide")[0].style,
        document.querySelectorAll(".outer-div-hide")[0]
      );
      document.getElementsByClassName("outer-div-hide")[0].style.display =
        "flex";
      document.getElementsByClassName("outer-div-hide")[1].style.display =
        "flex";
      document.querySelectorAll(".button")[0].style.display = "none";
    }
  }

  // Show/hide function for Engg
  function handleToggleEngg() {
    if (document.getElementsByClassName("outer-div-hide-engg")) {
      console.log(
        "clicked",
        document.getElementsByClassName("outer-div-hide")[0].style,
        document.querySelectorAll(".outer-div-hide")[0]
      );
      document.getElementsByClassName("outer-div-hide-engg")[0].style.display =
        "flex";
      document.getElementsByClassName("outer-div-hide-engg")[1].style.display =
        "flex";
      document.querySelectorAll(".button-engg")[0].style.display = "none";
    }
  }

  // Show/hide function for Engg
  function handleToggleMarket() {
    if (document.getElementsByClassName("outer-div-hide-market")) {
      document.getElementsByClassName("outer-div-hide-market")[0].style.display =
        "flex";
      document.getElementsByClassName("outer-div-hide-market")[1].style.display =
        "flex";
      document.querySelectorAll(".button-market")[0].style.display = "none";
    }
  }
  return (
    <>
      {/* Hero Section Starts  */}
      <div className="relative hero" >
        <div className="integrations grid grid-cols-1 lg:grid-cols-2 gap-40 justify-center md:px-24 py-7 gap-20 sm:px-16 gap-20 py-7 lg:px-32 py-9 gap-20 xl:px-40 py-9 gap-20" ref={animateHome}>
          <div className="text flex flex-col justify-center items-start">
            <h2>APP INTEGRATIONS</h2>
            <h1 className="xl:text-6xl md:text-6xl lg:text-6xl sm:text-5xl">
              One platform, all
              <span>
                <h3 className="xl:text-6xl md:text-6xl lg:text-6xl text-gray-500 sm:text-5xl">
                  your work.
                </h3>
              </span>
            </h1>
            <p className="text-xl text-gray-500 font-medium">
              Consolidate your tools and data with worko, providing your team
              with a unified space for focused productivity
            </p>
          </div>
          <div className="img flex justify-center items-center">
            <div className="image-wrapper">
              <img
                className="lg:mb-8 h-20 w-20 relative hero-image"
                src={HeroImage}
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section Ends */}

      {/* Boxes Section Starts */}
      {/* Communication Section Starts */}
      <div className="tables">
        <div className="communication flex justify-center items-center gap-40 flex-cols">
          <div className="communication-container flex flex-col">
            <h1 className="relative comm text-gray-350">Communication</h1>
            <p className="text-xl text-gray-500 font-normal">
              Seemlessly use your preferred tools for unified work, start to
              finish.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mx-auto tables-columns">
              <Link to="/integrations/medium">
                <div className="outer-div flex flex-cols justify-start" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          <img className="img-container" src="https://framerusercontent.com/images/KdEfpxCHd96fylnTMKzni4zL1U.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Medium
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Worko's Medium integration enhances content management.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/patreon">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/bdD8iT5T5scUFk4UpNbygYMU4.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Patreon
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Worko's Patreon integration provides strong support.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/slack">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/fi6YZVIWF4vUX87DH7ByL1SIZk.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Slack
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Effortlessly centralize team communication and boost.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/notion">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/GmMHJ6xyjsvJDQfFlslLI6c1SQ.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Notion
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Customize versatile workspaces to enhance project
                      management.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/stackoverflow">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/yk5PFJNqpmnxdVsGjZKJopLI0.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Stack overflow
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Join a thriving developer community for coding solutions.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/teams">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/fCglyxryD2zJfPIeaHmCEgl3aIs.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Microsoft teams
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Empower teamwork, streamline collaboration, and enhance.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="integrations/discord">
                <div className="outer-div-hide" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/mv920C0srvgua3MmaVtRbrnuE.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Discord
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Connect with diverse online communities and engage in
                      lively discussions
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="integrations/outlook">
                <div className="outer-div-hide" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/pxO8Kf5atWTwTwzqtnaLNeQXw.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Microsoft outlook
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Manage emails, calenders, and appointments seamlessly with
                      Outlook
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="button text-base"
              onClick={() => {
                handleToggle();
              }}
            >
              Show more
            </div>
          </div>
        </div>
      </div>
      {/* Communication Section Ends */}

      {/* Engineering Section Starts */}
      <div className="tables mt-52">
        <div className="communication flex justify-center items-center gap-40 flex-cols">
          <div className="communication-container flex flex-col">
            <h1 className="relative comm text-gray-400">Engineering</h1>
            <p className="text-xl text-gray-500 font-normal">
              Seemlessly integrate your engineering workflows
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mx-auto tables-columns">
              <Link to="/integrations/coda">
                <div className="outer-div flex flex-cols justify-start">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/Mi2uwZzBOQmF7lmaFF5YvxGTmw.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                      Coda
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Worko's integration with Coda empowers efficient project.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/dev-to">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/MVTBU2Nb8y50K74t808FcR4iuTE.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Dev.to
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Worko's Dev.to integration streamlines content management
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/angular">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/TtTBYaH8RUSMz9mphSR6bsT5AM.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Angular
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Develop dynamic web applications with the veratile Angular
                      framework
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/codepen">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/4HHHR2qsVdQs6gbigKdOUSkshg.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Codepen
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Experiment and showcase code in a developer-friendly.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/github">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/g6eSOVzUGbKkTfohusvTwH5U.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Github
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Collaborate on coding projects, manage version control.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/codesandbox">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/FCz5RngQzNP1n1IWuoXImHm5Sf4.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      CodeSandbox
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Simplify coding with an online platform that supports.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/webhooks">
                <div className="outer-div-hide-engg" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/ayiFNCOfljug44c3ZoatXUv0pag.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Webhooks
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Automate data integration and trigger action across.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/gitlab">
                <div className="outer-div-hide-engg" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/qFVWTXyc9OnwbW3XDRzEVJFZ1hg.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Gitlab
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Optimize DevOps workflows with GitLab's comprehensive.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="button-engg text-base"
              onClick={() => {
                handleToggleEngg();
              }}
            >
              Show more
            </div>
          </div>
        </div>
      </div>
      {/* Engineering Section Ends */}

      {/* Marketing Section Starts */}

      <div className="tables mt-52 mb-14">
        <div className="communication flex justify-center items-center gap-40 flex-cols">
          <div className="communication-container flex flex-col">
            <h1 className="relative comm text-gray-400">Marketing & Design</h1>
            <p className="text-xl text-gray-500 font-normal">
              Seemlessly use your preferred tools for unified work, start to
              finish.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mx-auto tables-columns">
              <Link to="/integrations/telegram">
                <div className="outer-div flex flex-cols justify-start" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/8tQIapfwnH0vnMTJF4nXlDB0pQc.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Telegram
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Worko's and Telegram integrate seamlessly to enhance task
                      efficiecy.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/pinterest">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/Nqk6KagDMoXtUbJOFhBNyEwaagk.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Pinterest
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Worko's integrates with Pinterest to simplify task
                      management.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/behance">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/1NRUcAu3ZkOMtBX8OzgWSePFdS4.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Behance
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Showcase your creative portfolio to the world and connect.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/dribbble">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/rRIFRS2X4xzFtcMNxmjwa7760.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Dribble
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Discover, share, and be inspired by exceptional design.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/sketch">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/QZYzQXWtOeRi7Wh9FVAhbaGbUeQ.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Sketch
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Streamline your design process and create captivating
                      digital.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/youtube">
                <div className="outer-div" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/VlrUYDZimiVY91VtEmYmPpKyY.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Youtube
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Access a vast repository of videos spanning various
                      topics.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/figma">
                <div className="outer-div-hide-market" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/GvHXgBvtueCgg8kHdVYbJyIcKo4.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Figma
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Collaborate seamlessly on design projects and iterate.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/integrations/framer">
                <div className="outer-div-hide-market" onClick={()=>{window.scrollTo({top:0, left:0, behavior:"smooth"})}}>
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image-icon flex justify-center items-center">
                        <div className="flex justify-center items-center">
                        <img className="img-container" src="https://framerusercontent.com/images/HMp1ApDIPyavBy4zbdxCpOcfyKM.svg" alt="images" />
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
                      Framer
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="p text-left text-gray-500 font-semibold">
                      Craft interactive prototypes for engaging user
                      experiences.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          <div
              className="button-market text-base"
              onClick={() => {
                handleToggleMarket();
              }}
            >
              Show more
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Section Ends */}
    </>
  );
}
