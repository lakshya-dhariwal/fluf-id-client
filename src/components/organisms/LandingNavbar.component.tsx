import { cn } from "@app/utils/cn";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { HoverBorderGradient } from "../ui/border-gradient";
import { GradientBadge } from "../molecules/GradientBadge.component";
import Button from "@app/components/atoms/Button";
import { useRouter } from "next/router";

export function LandingNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0  font-space max-w-2xl justify-center mx-auto z-50 rounded-full    flex space-x-2 items-center    px-2 ",
        className
      )}
    >
      <GradientBadge>
        <span className="relative z-100 text-white  mx-auto  p-2text-xs font-semibold w-full   font-space inline-block py-0.5">
          <div className="flex text-[14px] p-2 mx-2 gap-[50px] font-mono flex-row items-center justify-between">
            <h1 className="  text-emerald-600">fluf.id</h1>
            {/* <>
              <div className="mx-5"> */}
            {/* <MenuItem setActive={setActive} active={active} item="Services">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">
                      Interface Design
                    </HoveredLink>
                    <HoveredLink href="/seo">
                      Search Engine Optimization
                    </HoveredLink>
                    <HoveredLink href="/branding">Branding</HoveredLink>
                  </div>
                </MenuItem>
              </div>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://placehold.jp/3d4070/ffffff/150x150.png"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Tailwind Master Kit"
                    href="https://tailwindmasterkit.com"
                    src="https://placehold.jp/3d4070/ffffff/150x150.png"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Moonbeam"
                    href="https://gomoonbeam.com"
                    src="https://placehold.jp/3d4070/ffffff/150x150.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Rogue"
                    href="https://userogue.com"
                    src="https://placehold.jp/3d4070/ffffff/150x150.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Pricing">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem> */}
            {/* </> */}
            <button
              className="bg-emerald-500 border-b-[2px] border-r-[2px] border-transparent hover:border-emerald-600 text-gray-700 p-[10px] py-[8px] rounded-md"
              onClick={() => router.push("/board/id")}
            >
              Launch App
            </button>
          </div>
          {/* <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span> */}
        </span>{" "}
      </GradientBadge>
    </div>
  );
}
