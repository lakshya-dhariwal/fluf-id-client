import React from "react";
import { LandingNavbar } from "../organisms/LandingNavbar.component";
import { PulseBeams } from "../ui/pulse-beam";

function LandingLayout(props: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col ">
      <LandingNavbar className="top-2" />
      <div className="flex-grow h-0 bg-white overflow-y-scroll scrollbar-hide">
        <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="flex flex-col gap-4 items-center">
            <div className=" w-full h-full -mt-7 flex-none  inset-0">
              <div className=" inset-x-0  flex justify-center">
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span className="relative z-20 text-white text-xs font-semibold font-space inline-block py-0.5">
                    powered by quantum safe FHE cryptography
                  </span>

                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
                </div>
              </div>
            </div>

            <p className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              Confidential Decentralised Identity
            </p>
            <p className="text-2xl text-gray-500">
              Fluf ID enables composable encrypted state, which allows for
              usecases in KYC, authentication, RWA and DeFI.
            </p>
            <div className="mt-3">
              <AnimatedPinDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="font-space  w-full flex items-center justify-center ">
      <PinContainer title="/launch app" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs  font-space !pb-2 !m-0 font-bold  text-base text-slate-100">
            FLUF ID
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 font-space">
              Your FHE powered encrypted digital identity.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
        </div>
      </PinContainer>
    </div>
  );
}

export default LandingLayout;
