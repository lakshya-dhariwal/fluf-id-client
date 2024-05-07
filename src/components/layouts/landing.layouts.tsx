import React from "react";
import { LandingNavbar } from "../organisms/landingNavbar.component";

function LandingLayout(props: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col ">
      <LandingNavbar className="top-2" />
      <div className="text-black dark:text-white flex-grow h-0 bg-gray-500">
        Confidentail FHE Identity
      </div>
    </div>
  );
}

export default LandingLayout;
