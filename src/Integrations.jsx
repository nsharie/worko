import HeroImage from "./assets/final_image.png";
import React from "react";
import './Integrations.css';

export default function Integrations(){
    return(
        <>
    {/* Hero Section Starts  */}
      <div className="relative hero">
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
            <h1 className="relative comm text-gray-400">Communication</h1>
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
              <div className="outer-div">
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
              <div className="outer-div">
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
              <div className="outer-div flex flex-cols justify-start">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">C</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">D</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">A</div>
                    </div>
                  </div>
                  <span className="mx-3 text-gray-300 font-semibold">
                    Angular
                  </span>
                </div>
                <div className="mt-2">
                  <p className="p text-left text-gray-500 font-semibold">
                    Develop dynamic web applications with the veratile Angular framework
                  </p>
                </div>
              </div>
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">C</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">G</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">C</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">W</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">G</div>
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
              <div className="outer-div flex flex-cols justify-start">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">T</div>
                    </div>
                  </div>
                  <span className="mx-3 text-gray-300 font-semibold">
                    Telegram
                  </span>
                </div>
                <div className="mt-2">
                  <p className="p text-left text-gray-500 font-semibold">
                    Worko's and Telegram integrate seamlessly to enhance task efficiecy.
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
                    Pinterest
                  </span>
                </div>
                <div className="mt-2">
                  <p className="p text-left text-gray-500 font-semibold">
                    Worko's integrates with Pinterest to simplify task management.
                  </p>
                </div>
              </div>
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">B</div>
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
              <div className="outer-div">
                <div className="feature-icon flex justify-start items-center">
                  <div className="image-holder flex justify-center items-center">
                    <div className="image flex justify-center items-center">
                      <div className="flex justify-center items-center">D</div>
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
              <div className="outer-div">
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
              <div className="outer-div">
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
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Section Ends */}
    </>
    )
}