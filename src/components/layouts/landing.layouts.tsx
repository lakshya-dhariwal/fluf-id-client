import React from "react";
import "cal-sans";
import { LandingNavbar } from "../organisms/LandingNavbar.component";
import { PulseBeams } from "../ui/pulse-beam";
import Footer from "@app/components/organisms/Footer";

function LandingLayout(props: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col ">
      <LandingNavbar className="top-2" />
      <div className="flex-grow h-0 bg-white overflow-y-scroll scrollbar-hide">
        <div className="h-[100vh] relative flex-col scrollbar-hide  overflow-y-scroll w-full dark:bg-black text-neutral-200 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex ">
          {/* Radial gradient for the container to give a faded look */}
          {/*  */}

          <div className="flex min-h-[100vh] px-3 sm:p-0 relative flex-col  items-center justify-center ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="mt-[20vh] flex-none  inset-0">
              <div className=" inset-x-0  flex justify-center items-center">
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span className="relative z-20 text-neutral-100  text-xs font-semibold font-space inline-block py-0.5">
                    powered by quantum safe FHE cryptography
                  </span>

                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
                </div>
              </div>
            </div>
            <div className="flex text-center sm:text-left items-center flex-col gap-2 my-5 ">
              <p
                style={{ fontFamily: "Cal Sans" }}
                className="text-4xl sm:text-6xl font-bold  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 pb-2"
              >
                Confidential Decentralised Identity
              </p>
              <p
                className="text-2xl text-gray-500"
                style={{ fontFamily: "Cal Sans" }}
              >
                Fluf ID enables composable encrypted state, which allows for
                usecases in KYC, Authentication, RWA and DeFI.
              </p>
              <div className="my-8 z-0">
                <AnimatedPinLandingCard />
              </div>
            </div>
          </div>

          <div className="  min-h-[100vh] sm:grid place-content-center grid-cols-2 font-space  justify-around border-neutral-400 text-neutral-300 sm:p-8 rounded-lg m-8 ">
            <div className="flex  flex-col max-w-[800px] min-h-[80vh] justify-center  items-start gap-4">
              <GradientBadge>
                <h1 className="">coming soon</h1>
              </GradientBadge>
              <h1 className="text-4xl" style={{ fontFamily: "Cal Sans" }}>
                FHE Anonymized AD Network with AI based personalization and
                targeting
              </h1>
              <p className="text-gray-400 text-[18px] ">
                Say goodbye to intrusive data mining and hello to personalized
                ads that respect your privacy. With Fluf ID, your identity
                remains confidential while AI algorithms tailor advertisements
                specifically to your interests. Harness the power of FHE to
                anonymize your data, ensuring your privacy is never compromised
              </p>
              <div className=" flex justify-center text-center">
                <button className="bg-[#34A672] border-[#3ECF8D] border-[1px] text-neutral-100   rounded-lg py-[8px] px-[12px] text-[16px]">
                  <span>Join Waitlist</span>
                </button>
              </div>
            </div>

            <div className="hidden sm:block">
              <GlobeLanding />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

import { PinContainer } from "../ui/3d-pin";
import { HoverBorderGradient } from "../ui/border-gradient";
import { GlobeLanding } from "../organisms/GlobeLanding.component";
import { GradientBadge } from "../molecules/GradientBadge.component";

export function AnimatedPinLandingCard() {
  return (
    <div className="  w-full flex items-center justify-center ">
      <PinContainer title="/launch app" href="/board">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs font-mono  !pb-2 !m-0  text-base text-slate-100">
            fluf_id
          </h3>
          <div className="text-base font-mono !m-0 !p-0 font-normal">
            <span className="text-slate-400 font-thin ">
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
