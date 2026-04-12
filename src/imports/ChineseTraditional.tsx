import svgPaths from "./svg-0kflnned4h";

function Group() {
  return (
    <div className="h-[221.643px] relative w-[445.231px]" data-name="Group">
      <div className="absolute inset-[-3.36%_-1.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460.12 236.531">
          <g id="Group">
            <path d={svgPaths.p84c4000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p3722e780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1da686c0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p31d57800} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1c7d3580} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p26cb9b80} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p2bc72780} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p12561080} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p2776e200} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.pd520200} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1bdbd200} id="Vector_11" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.pada0f80} id="Vector_12" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p25081c00} id="Vector_13" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p4ad1480} id="Vector_14" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p28ada580} id="Vector_15" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.pf35f00} id="Vector_16" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1a2a6200} id="Vector_17" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.pee4ff00} id="Vector_18" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p31199600} id="Vector_19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p275f2000} id="Vector_20" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1644c300} id="Vector_21" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1bdd6368} id="Vector_22" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p3a699400} id="Vector_23" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p160ecd80} id="Vector_24" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p27c92200} id="Vector_25" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p2c9bd0ef} id="Vector_26" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p183cf0a0} id="Vector_27" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p3baf1480} id="Vector_28" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HelloZhHant() {
  return (
    <div className="h-[200px] relative shrink-0 w-[461px]" data-name="hello-zh-Hant">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[221.643px] items-center justify-center left-[calc(50%+0.77px)] top-[calc(50%-0.05px)] w-[445.231px]">
        <div className="-scale-y-100 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}

export default function ChineseTraditional() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Chinese (Traditional)">
      <div aria-hidden="true" className="absolute backdrop-blur-[30px] bg-white inset-0 mix-blend-darken pointer-events-none" />
      <HelloZhHant />
    </div>
  );
}