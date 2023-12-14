import React from "react";
import "./IntegrationLink.css";
import Telegram from "../assets/Telegram.jpg";
import { Link } from "react-router-dom";
import Telegramlogo from "../assets/telegram-logo.svg";

export default function IntegrationsLink() {
  return (
    <>
      {/* Hero Section Starts */}
      <div className="main max-w-[1140px] mx-auto">
        <div className="absolute hero">
          <div className="integrations"></div>
        </div>

        <div className="header mt-24 sm:ml-14 md:ml-24 lg:ml-16">
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
            <div className="text-gray-500">Integrations</div>
            <div className="text-xl text-gray-500">{">"}</div>
            <div>medium</div>
          </div>
        </div>

        <div className="tables flex flex-cols gap-4 mt-15 px-16 py-16">
          <div className="left-side w-6/12 max-w-[240px] flex flex-cols place-content-start gap-4">
            <div className="upper flex justify-start items-start">
              <div className="outer-div flex justify-center items-center">
                <img src={Telegramlogo}/>
              </div>
              <div className="px-5 py-4 font-semibold text-xl">Telegram</div>
            </div>
            <div className="left-side-info">
              <p>Made by</p>
              <p className="text-gray-500">Worko</p>
            </div>
            <div className="divider"></div>

            <div className="left-side-info">
              <p>Website</p>
              <p className="text-blue-900"><Link to="https://telegram.org/">telegram.org</Link></p>
            </div>
            <div className="divider"></div>

            <div className="left-side-info">
              <p>Categories</p>
              <div className="categories">Marketing & Design</div>
            </div>
            <div className="divider"></div>
          </div>
          <div className="right-side w-full">
            <div className="image-holder flex justify-start items-center w-full ms-5">
              <img className="w-full" src={Telegram} alt="" />
            </div>
            <div className="content text-gray-500 text-left mr-9">
              Worko integrates with Pinterest to simplify task management.
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
              <div className="outer-div flex flex-cols justify-start">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">M</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">P</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">S</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
