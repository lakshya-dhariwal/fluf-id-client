export const GradientBadge = (children: any) => {
    return (
      <div className=" inset-x-0  flex justify-center items-center">
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span className="relative z-20 text-white text-xs font-semibold font-space inline-block py-0.5">
            {children}
          </span>
  
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
        </div>
      </div>
    );
  };
  