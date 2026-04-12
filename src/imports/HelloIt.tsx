import svgPaths from "./svg-w5wd9510j3";

function Group() {
  return (
    <div className="h-[99.01px] relative w-[483.613px]" data-name="Group">
      <div className="absolute inset-[-7.52%_-1.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 498.503 113.898">
          <g id="Group">
            <path d={svgPaths.p1b360d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p231c3a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p36cfae10} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p212c3700} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function HelloIt() {
  return (
    <div className="relative size-full" data-name="hello-it">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[99.01px] items-center justify-center left-[calc(50%+0.75px)] top-[calc(50%+0.1px)] w-[483.613px]">
        <div className="-scale-y-100 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}