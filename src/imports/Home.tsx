import svgPaths from "./svg-260dwcf5yz";
import imgRectangle6 from "figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";
import imgRectangle7 from "figma:asset/88d6fa30095955fccd0382c4c0ff04caae07195e.png";
import imgRectangle5 from "figma:asset/e7005b47cdc0c741338480be34ec27c2bb136ec7.png";
import imgRectangle4 from "figma:asset/6f059ebcde911d3a645daf63515e29a27dce1474.png";
import imgRectangle8 from "figma:asset/a649fb0d175cafbeea877080d141747abb313f4f.png";
import imgRectangle9 from "figma:asset/73010c2dfe2bac078867b4ee6d89c5fea8ec4f53.png";
import imgRectangle10 from "figma:asset/d409b7c7813c2020dafd39fbaa3706891824599a.png";
import img291 from "figma:asset/637f9d8820279c93bb2cefb93af72472f431eb50.png";

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
    <div className="absolute h-[44px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[375px]" data-name="iOS / status-bar-with-notch / SF">
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[104px] relative rounded-[8px] shrink-0 w-[277px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle6} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle7} />
        </div>
      </div>
      <div className="h-[122px] relative rounded-[8px] shrink-0 w-[327px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[150.89%] left-0 max-w-none top-[1.26%] w-full" src={imgRectangle5} />
        </div>
      </div>
      <div className="h-[104px] relative rounded-[8px] shrink-0 w-[277px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle6} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle4} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[160px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 20">
        <g id="Frame 1171275616">
          <line id="Line 5" opacity="0.3" stroke="var(--stroke-0, #CDF564)" strokeWidth="3" x1="10" x2="30" y1="8.5" y2="8.5" />
          <line id="Line 2" opacity="0.3" stroke="var(--stroke-0, #CDF564)" strokeWidth="3" x1="40" x2="60" y1="8.5" y2="8.5" />
          <line id="Line 1" stroke="var(--stroke-0, #CDF564)" strokeWidth="3" x1="70" x2="90" y1="8.5" y2="8.5" />
          <line id="Line 3" opacity="0.3" stroke="var(--stroke-0, #CDF564)" strokeWidth="3" x1="100" x2="120" y1="8.5" y2="8.5" />
          <line id="Line 4" opacity="0.3" stroke="var(--stroke-0, #CDF564)" strokeWidth="3" x1="130" x2="150" y1="8.5" y2="8.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[-261px] top-[184px]">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

function NewsFilm() {
  return (
    <div className="absolute contents left-[-261px] top-[143px]" data-name="News Film">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[25px] text-[20px] text-nowrap text-white top-[143px] whitespace-pre">News Film</p>
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Drama</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative size-full" data-name="Arrow - Right">
      <div className="absolute inset-[-5%_-6.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <g id="Arrow - Right">
            <path d="M6.77464 15.75V0.75" id="Stroke 1" stroke="var(--stroke-0, #CDF564)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3d0be000} id="Stroke 3" stroke="var(--stroke-0, #CDF564)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyCurvedLightArrowRight() {
  return (
    <div className="[grid-area:1_/_1] ml-px mt-px relative size-[24px]" data-name="Iconly/Curved/Light/Arrow - Right">
      <div className="absolute flex inset-[23.76%_17.71%_26.04%_19.79%] items-center justify-center">
        <div className="flex-none h-[15px] rotate-[270deg] w-[12.049px]">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[26px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #1D1D25)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <IconlyCurvedLightArrowRight />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[237px] items-start relative shrink-0">
      <Frame6 />
      <Group4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-[351px]">
      <div className="h-[121px] relative rounded-[15px] shrink-0 w-[208px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15px]">
          <img alt="" className="absolute h-[250.75%] left-0 max-w-none top-[-133.04%] w-full" src={imgRectangle8} />
        </div>
      </div>
      <div className="h-[121px] relative rounded-[15px] shrink-0 w-[208px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[15px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[15px]">
            <img alt="" className="absolute h-[229.2%] left-0 max-w-none top-[-22.75%] w-full" src={imgRectangle9} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Drama() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Drama">
      <Frame10 />
      <Frame7 />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative size-full" data-name="Arrow - Right">
      <div className="absolute inset-[-5%_-6.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <g id="Arrow - Right">
            <path d="M6.77464 15.75V0.75" id="Stroke 1" stroke="var(--stroke-0, #CDF564)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3d0be000} id="Stroke 3" stroke="var(--stroke-0, #CDF564)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[26px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <circle cx="13" cy="13" fill="var(--fill-0, #1D1D25)" id="Ellipse 3" r="13" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-px mt-px relative size-[24px]" data-name="Iconly/Curved/Light/Arrow - Right">
        <div className="absolute flex inset-[23.76%_17.71%_26.04%_19.79%] items-center justify-center">
          <div className="flex-none h-[15px] rotate-[270deg] w-[12.049px]">
            <ArrowRight1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[119px] items-center relative shrink-0 w-[326px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Continue To Watch</p>
      <Group3 />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[39px] ml-[143.56px] mt-[59px] relative w-[38.881px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="Group 1">
          <ellipse cx="19.4404" cy="19.5" fill="var(--fill-0, #1D1D25)" id="Ellipse 6" rx="19.4404" ry="19.5" />
          <path d={svgPaths.p88a4480} fill="var(--fill-0, #CDF564)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[156px] ml-0 mt-0 relative rounded-[8px] w-[326px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle6} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgRectangle10} />
        </div>
      </div>
      <Group />
    </div>
  );
}

function ContinueToWatch() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Continue To Watch">
      <Frame3 />
      <Group1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[358px]">
      <Drama />
      <ContinueToWatch />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[48px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #CDF564)" id="Ellipse 7" r="24" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[41px] ml-[11px] mt-[4px] relative w-[26px]" data-name="29 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[112.2%] left-[-42.31%] max-w-none top-[-12.2%] w-[176.92%]" src={img291} />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center leading-[0] relative shrink-0">
      <Group2 />
      <div className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[0px] text-nowrap text-white whitespace-pre">
        <p className="leading-[normal] mb-0 text-[20px]">Hewwo</p>
        <p className="leading-[normal] text-[24px]">
          <span className="text-[#cdf564]">Kunin!</span>👋
        </p>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="h-[19.089px] relative shrink-0 w-[14.763px]" data-name="Notification">
      <div className="absolute inset-[-3.93%_-5.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 21">
          <g id="Notification">
            <path clipRule="evenodd" d={svgPaths.p1c9a0300} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p15944cd2} id="Stroke 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chat">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="Chat">
            <path d="M14.6893 11.163H14.6983" id="Stroke 11" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M10.6803 11.163H10.6893" id="Stroke 13" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6.67126 11.163H6.68026" id="Stroke 15" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path clipRule="evenodd" d={svgPaths.p37cd4580} fillRule="evenodd" id="Stroke 4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <div className="bg-[#1d1d25] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[36px]" data-name="Iconly/Curved/Light/Notification">
        <Notification />
      </div>
      <div className="bg-[#1d1d25] content-stretch flex items-start p-[8px] relative rounded-[4px] shrink-0" data-name="Iconly/Curved/Light/Chat">
        <Chat />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute content-stretch flex gap-[92px] items-center left-[25px] top-[60px]" data-name="Profile">
      <Frame8 />
      <Frame1 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[8.33%_10.12%_8.33%_10%]" data-name="Home">
      <div className="absolute inset-[-3.75%_-3.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
          <g id="Home">
            <path clipRule="evenodd" d={svgPaths.p3222a080} fill="var(--fill-0, #CDF564)" fillRule="evenodd" id="Stroke 2" stroke="var(--stroke-0, #CDF564)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M7.42871 14.8855H13.2437" id="Stroke 1" stroke="var(--stroke-0, #1D1D25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Home1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Home">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Curved/Light/Home">
        <Home />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cdf564] text-[16px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-[11.31%_11.21%_11.21%_11.31%]" data-name="Search">
      <div className="absolute inset-[-4.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Search">
            <path clipRule="evenodd" d={svgPaths.p2d411a60} fillRule="evenodd" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p26b6f970} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-60 relative shrink-0" data-name="Search">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Curved/Light/Search">
        <Search />
      </div>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Search</p>
    </div>
  );
}

function Nobar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-60 relative shrink-0" data-name="Nobar">
      <div className="relative shrink-0 size-[24px]" data-name="Television">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
        <div className="absolute inset-[28.13%_12.5%_18.75%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.88%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
              <path d={svgPaths.p1aa29180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[9.38%_31.25%_71.88%_31.25%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-8.33%_17.85%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 5">
              <path d={svgPaths.p147fb6c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.06%_21.88%_48.44%_65.63%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p3cbff000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[57.81%_21.88%_29.69%_65.63%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p3cbff000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[28.13%_45.31%_18.75%_54.69%]" data-name="Vector">
          <div className="absolute inset-[-5.88%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 15">
              <path d="M0.75 13.5V0.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Nobar</p>
    </div>
  );
}

function Bookmark() {
  return (
    <div className="absolute inset-[7.29%_15.87%_7.29%_15.62%]" data-name="Bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 21">
        <g id="Bookmark">
          <path clipRule="evenodd" d={svgPaths.p32289980} fill="var(--fill-0, white)" fillRule="evenodd" id="Stroke 1 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.pd463700} fill="var(--fill-0, white)" fillRule="evenodd" id="Stroke 2 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconlyCurvedOutlineBookmark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Iconly/Curved/Outline/Bookmark">
      <Bookmark />
    </div>
  );
}

function Library() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center opacity-60 relative shrink-0" data-name="Library">
      <IconlyCurvedOutlineBookmark />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Library</p>
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="absolute bottom-[-0.5px] h-[32px] left-1/2 translate-x-[-50%] w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="absolute bg-[#1d1d25] bottom-0 content-stretch flex items-center justify-between left-[calc(50%-0.5px)] pb-[32px] pt-[16px] px-[30px] translate-x-[-50%] w-[386px]" data-name="Navigation Bar">
      <Home1 />
      <Search1 />
      <Nobar />
      <Library />
      <HomeIndicatorLight />
    </div>
  );
}

export default function Home2() {
  return (
    <div className="bg-neutral-950 relative size-full" data-name="Home">
      <NavigationBar />
      <IOsStatusBarWithNotchSf />
      <NewsFilm />
      <Frame9 />
      <Profile />
    </div>
  );
}