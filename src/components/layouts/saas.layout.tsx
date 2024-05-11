import { Web3Provider } from "@app/utils/Web3Provider";
import React from "react";
import { SiGoogleauthenticator } from "react-icons/si";
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { IoFingerPrintOutline } from "react-icons/io5";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { IoDocumentLock } from "react-icons/io5";
import toast from "react-hot-toast";
import Link from "next/link";
import { MdSdStorage } from "react-icons/md";
import { useRouter } from "next/router";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { BiPackage } from "react-icons/bi";

function SaasLayout(props: { children: React.ReactNode }) {
  return (
    <Web3Provider>
      <div className="flex  flex-row h-screen ">
        <SaasSidebar />
        <div className=" flex-grow bg-[#FEFEFF]">{props.children}</div>
      </div>
    </Web3Provider>
  );
}

const NAV_LINKS = [
  {
    label: "Identity",
    route: "/id",
    icon: <PiIdentificationBadgeFill className="text-[18px]" />,
  },
  {
    label: "FHE Authenticator",
    route: "/authenticator",
    icon: <SiGoogleauthenticator className="text-[18px]" />,
  },
  {
    label: "Passkeys",
    route: "/passkeys",
    icon: <IoFingerPrintOutline className="text-[18px]" />,
  },
  {
    label: "Incoginto KYC",
    route: null,
    icon: <IoDocumentLock className="text-[18px]" />,
  },
];

const SaasSidebar = () => {
  const { address } = useAccount();
  const router = useRouter();

  return (
    <div className="w-[250px] flex flex-col justify-between border-r-[1px] border-[#EEEFEE] bg-[#F7F7F7]  h-full">
      <div className="text-emerald-500 text-2xl p-5 font-bold border-b-[1px] border-[#EBEBEE] font-mono text-center">
        fluf.id
      </div>
      <div className=" p-2 py-5 flex-grow h-0">
        <h1 className="text-[12px] font-semibold text-gray-400">HOME</h1>
        <ul className="">
          {" "}
          {NAV_LINKS.map((link, index) => (
            <SaasLink {...link} key={index} />
          ))}
        </ul>
        <h1 className="text-[12px] font-semibold text-gray-400 mt-3">DAAPS</h1>
        <ul>
          <SaasLink
            route={null}
            icon={<MdSdStorage className="text-[18px]" />}
            label={"FHE Vault"}
          />
          <SaasLink
            route={null}
            icon={<BiPackage className="text-[18px]" />}
            label={"SDK"}
          />
        </ul>
      </div>
      <div className="border-t-[1px] p-5 border-[#EBEBEE] flex items-center justify-center">
        {/* className="bg-emerald-600  hover:opacity-80 font-semibold py-[8px] px-[10px] text-sm border-gray-900 text-neutral-100  my-1 cursor-pointer rounded" */}
        <ConnectKitButton />
      </div>
    </div>
  );
};

const SaasLink = (props: {
  icon: React.ReactNode;
  label: string;
  route: string | null;
}) => {
  const router = useRouter();
  const { address } = useAccount();
  return (
    <li
      onClick={() => {
        if (!props.route) {
          toast("Feature under development", { icon: "🚧" });
        }

        if (!address) {
          if (props.route !== "/id") router.push("/board/id");
          toast("Please connect your wallet", { icon: "🦊" });
        } else {
          router.push("/board" + props.route);
        }
      }}
      className="hover:text-emerald-600 border-[1px] border-transparent my-1  hover:border-emerald-400  flex flex-row items-center gap-[8px] hover:bg-emerald-50 rounded-md p-2 text-[#87878E] text-[16px] cursor-pointer"
    >
      <span>{props.icon} </span>
      <h1>{props.label}</h1>
      {!props.route && (
        <span className="text-green-500 border-emerald-400 px-[5px] py-[1px] h-fit border-[1px] rounded text-xs bg-emerald-50">
          soon
        </span>
      )}
    </li>
  );
};

export default SaasLayout;
