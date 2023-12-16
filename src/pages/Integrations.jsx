import HeroImage from "../assets/final_image.png";
import React from "react";
import "./Integrations.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
// import IntegrationsLink from "./IntegrationsLink";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Integrations() {
  const animate = useRef();
  // console.log(animate);
  const { contextSafe } = useGSAP({scope:animate});

  console.log(contextSafe);

  window.addEventListener("load", contextSafe(() => {
    gsap.from("hero", {
      opacity:0,
      x:400,
      duration:3,
    })
  }))
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
      <div className="relative hero" ref={animate}>
        <div className="integrations grid grid-cols-1 lg:grid-cols-2 gap-40 justify-center md:px-24 py-7 gap-20 sm:px-16 gap-20 py-7 lg:px-32 py-9 gap-20 xl:px-40 py-9 gap-20">
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
                <div className="outer-div flex flex-cols justify-start">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          M
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          P
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          S
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          N
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          S
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          M
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
                <div className="outer-div-hide">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          D
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
                <div className="outer-div-hide">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          M
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
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          C
                        </div>
                      </div>
                    </div>
                    <span className="mx-3 text-gray-300 font-semibold">
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          D
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          A
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          C
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          G
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          C
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
                <div className="outer-div-hide-engg">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          W
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
                <div className="outer-div-hide-engg">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          G
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
                <div className="outer-div flex flex-cols justify-start">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          T
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          P
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          B
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          D
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          S
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
                <div className="outer-div">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          Y
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
                <div className="outer-div-hide-market">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          F
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
                <div className="outer-div-hide-market">
                  <div className="feature-icon flex justify-start items-center">
                    <div className="image-holder flex justify-center items-center">
                      <div className="image flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          F
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
