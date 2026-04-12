import svgPaths from "./svg-b4dawi2edy";

function Group() {
  return (
    <div className="h-[59.986px] relative w-[140.104px]" data-name="Group">
      <div className="absolute inset-[-3.63%_-1.55%_-3.63%_-1.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144.462 64.3436">
          <g id="Group">
            <path d={svgPaths.p2aafa980} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p31d29500} id="Vector_2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p25ac0c80} id="Vector_3" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p1ea35900} id="Vector_4" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p3165b180} id="Vector_5" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p112b4c00} id="Vector_6" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p1e3a8040} id="Vector_7" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p36518cc0} id="Vector_8" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
            <path d={svgPaths.p32ad7a00} id="Vector_9" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="4.35724" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[60px] relative shrink-0 w-[405.063px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[203px] not-italic text-[60px] text-center text-white top-[0.5px] tracking-[0.2637px] whitespace-nowrap">
        <span className="leading-[60px]">{`, I'm `}</span>
        <span className="leading-[60px] text-[#ad46ff]">Aqsa Herry</span>
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[86px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[36px] items-center justify-center px-[85px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <Group />
            </div>
          </div>
          <Text />
        </div>
      </div>
    </div>
  );
}

export default function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Heading 1">
      <Container />
    </div>
  );
}