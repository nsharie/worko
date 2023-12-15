import React, { useState } from "react";
import "./Demo.css";
import { Link } from "react-router-dom";

export default function Demo() {

function handleToggle(){
    
    console.log("clicked")
    if(document.getElementById("lower_box")){
        document.getElementById("lower_box").style.display = "flex";
    }
}


  return (
    <>
{/* Communication Section Starts */}
<div className="tables">
        <div className="communication flex justify-center items-center gap-40 flex-cols">
          <div className="communication-container flex flex-col">
            <h1 className="relative comm text-gray-400">Communication</h1>
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
              </Link>
              <Link to="/integrations/patreon">
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
              </Link>
              <Link to="/integrations/slack">
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
              </Link>
              <Link to="/integrations/notion">
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">N</div>
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
                      <div className="flex justify-center items-center">S</div>
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
                      <div className="flex justify-center items-center">M</div>
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
              <div className="outer-div" id="lower_box">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">D</div>
                    </div>
                  </div>
                  <span className="mx-3 text-gray-300 font-semibold">
                    Discord
                  </span>
                </div>
                <div className="mt-2">
                  <p className="p text-left text-gray-500 font-semibold">
                    Connect with diverse online communities and engage in lively
                    discussions
                  </p>
                </div>
              </div>
              </Link>
              <Link to="integrations/outlook">
              <div className="outer-div" id="lower_box">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">M</div>
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
          </div>
        </div>
            <div className="button" onClick={handleToggle()}>Show more</div>
      </div>
      {/* Communication Section Ends */}
    </>
  );
}
