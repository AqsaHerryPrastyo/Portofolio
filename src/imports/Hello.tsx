import svgPaths from "./svg-y9r5mqq3g7";

function Group() {
  return (
    <div className="h-[184.905px] relative w-[621.355px]" data-name="Group">
      <div className="absolute inset-[-4.03%_-1.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 636.247 199.793">
          <g id="Group">
            <path d={svgPaths.p12383600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.p11b9a580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Hello() {
  return (
    <div className="relative size-full" data-name="hello">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[184.905px] items-center justify-center left-[calc(50%+0.87px)] top-[calc(50%-0.06px)] w-[621.355px]">
        <div className="-scale-y-100 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}