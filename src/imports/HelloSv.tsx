import svgPaths from "./svg-zf1d2linee";

function Group() {
  return (
    <div className="h-[260.833px] relative w-[368.253px]" data-name="Group">
      <div className="absolute inset-[-2.85%_-2.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 383.145 275.721">
          <g id="Group">
            <path d={svgPaths.p1bbf5380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p3f7a9800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p260f6680} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function HelloSv() {
  return (
    <div className="relative size-full" data-name="hello-sv">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[260.833px] items-center justify-center left-[calc(50%-0.18px)] top-[calc(50%+0.08px)] w-[368.253px]">
        <div className="-scale-y-100 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}