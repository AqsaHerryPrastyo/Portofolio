import svgPaths from "./svg-e69qkuoa2v";

function Group() {
  return (
    <div className="h-[210.918px] relative w-[541.935px]" data-name="Group">
      <div className="absolute inset-[-3.53%_-1.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 556.824 225.807">
          <g id="Group">
            <path d={svgPaths.p36524c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1a0b3e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p1b7e2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p16758900} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p35a31400} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p2b49c880} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HelloAr() {
  return (
    <div className="h-[200px] relative shrink-0 w-[557px]" data-name="hello-ar">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[210.918px] items-center justify-center left-[calc(50%+0.91px)] top-[calc(50%-0.2px)] w-[541.935px]">
        <div className="-scale-y-100 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}

export default function Arabic() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Arabic">
      <div aria-hidden="true" className="absolute backdrop-blur-[30px] bg-white inset-0 mix-blend-darken pointer-events-none" />
      <HelloAr />
    </div>
  );
}