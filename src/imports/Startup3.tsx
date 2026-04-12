import svgPaths from "./svg-1457twtkb8";
import imgPnglogo1 from "figma:asset/2e88c5a73fec85d28b27e7e7e104aa411fc37cfb.png";

function IOsIconSmallMobileSignal() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="iOS / icon / small / Mobile Signal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="iOS / icon / small / Mobile Signal">
          <path d={svgPaths.p15d4ae30} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IOsIconSmallWifi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="iOS / icon / small / Wifi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="iOS / icon / small / Wifi">
          <path d={svgPaths.p382fcb80} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IOsIconSmallBattery() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25px]" data-name="iOS / icon / small / battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 16">
        <g clipPath="url(#clip0_13_255)" id="iOS / icon / small / battery">
          <path d={svgPaths.p15509f50} id="outline border" opacity="0.35" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p307e0200} fill="var(--fill-0, white)" id="node" opacity="0.4" />
          <path d={svgPaths.p365f7580} fill="var(--fill-0, white)" id="charge" />
        </g>
        <defs>
          <clipPath id="clip0_13_255">
            <rect fill="white" height="16" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IOsIconStatusBar() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-start right-[15px] top-[15px]" data-name="iOS / icon / status-bar">
      <IOsIconSmallMobileSignal />
      <IOsIconSmallWifi />
      <IOsIconSmallBattery />
    </div>
  );
}

function IOsStatusBarWithNotchSf() {
  return (
    <div className="absolute bg-neutral-950 h-[44px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[375px]" data-name="iOS / status-bar-with-notch / SF">
      <div className="absolute h-[30px] left-1/2 top-[-2px] translate-x-[-50%] w-[219px]" data-name="notch">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="notch"></g>
        </svg>
      </div>
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-[32px] text-[15px] text-nowrap text-white top-[13px] tracking-[-0.32px] whitespace-pre">9:41</p>
      <IOsIconStatusBar />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[61px] left-[calc(25%+10.65px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[72.796px]">
      <div className="absolute h-[61px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[72.796px]" data-name="pnglogo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPnglogo1} />
      </div>
    </div>
  );
}

export default function Startup() {
  return (
    <div className="bg-neutral-950 relative size-full" data-name="Startup - 3">
      <IOsStatusBarWithNotchSf />
      <Frame />
      <p className="absolute font-['Plus_Jakarta_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic leading-[21px] left-[calc(25%+35.25px)] text-[40px] text-nowrap text-white top-[406px] whitespace-pre">ObarKuy</p>
    </div>
  );
}