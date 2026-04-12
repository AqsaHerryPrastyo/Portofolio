import svgPaths from "./svg-wsrz6m2euh";

function Group() {
  return (
    <div className="h-[260.833px] relative w-[495.884px]" data-name="Group">
      <div className="absolute inset-[-2.85%_-1.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 510.774 275.721">
          <g id="Group">
            <path d={svgPaths.p188314e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p30e90ec0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p303e67c8} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1b532840} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HelloCs() {
  return (
    <div className="h-[200px] relative shrink-0 w-[511px]" data-name="hello-cs">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[260.833px] items-center justify-center left-[calc(50%+0.99px)] top-[calc(50%+0.01px)] w-[495.884px]">
        <div className="-scale-y-100 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}

export default function Czech() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Czech">
      <div aria-hidden="true" className="absolute backdrop-blur-[30px] bg-white inset-0 mix-blend-darken pointer-events-none" />
      <HelloCs />
    </div>
  );
}