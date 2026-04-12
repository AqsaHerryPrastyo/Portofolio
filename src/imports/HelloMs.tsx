import svgPaths from "./svg-f1z4v9tofb";

function Group() {
  return (
    <div className="h-[184.905px] relative w-[523.341px]" data-name="Group">
      <div className="absolute inset-[-4.03%_-1.42%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 538.232 199.793">
          <g id="Group">
            <path d={svgPaths.p12383600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
            <path d={svgPaths.pb948d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="14.8883" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function HelloMs() {
  return (
    <div className="relative size-full" data-name="hello-ms">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[184.905px] items-center justify-center left-[calc(50%+0.86px)] top-1/2 w-[523.341px]">
        <div className="-scale-y-100 flex-none">
          <Group />
        </div>
      </div>
    </div>
  );
}