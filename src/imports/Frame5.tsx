import svgPaths from "./svg-8nyjavqfdl";
import imgFrame5 from "figma:asset/d7380f96469e40689a739f087f761349035f78c3.png";

function G() {
  return (
    <div className="absolute inset-[-6.57%_66.45%_-15.4%_3.98%]" data-name="g391">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468.503 483">
        <g id="g391" opacity="0.8">
          <path d={svgPaths.p1d5db400} fill="var(--fill-0, white)" id="path387" />
          <path d={svgPaths.p31ab5a70} fill="var(--fill-0, white)" id="path388" />
          <path d={svgPaths.p258084c0} fill="var(--fill-0, white)" id="path389" />
          <path d={svgPaths.p1e7bf80} fill="var(--fill-0, white)" id="path390" />
          <path d={svgPaths.p26623500} fill="var(--fill-0, white)" id="path391" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[396px] left-0 overflow-clip top-0 w-[1584px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[81198645199.35%] left-[-2811362899.8%] max-w-none top-[-10524664750.73%] w-[4557691033.79%]" src={imgFrame5} />
        </div>
      </div>
      <div className="absolute font-['Coolvetica:Regular',sans-serif] leading-[0] not-italic right-[108.7px] text-[0px] text-right text-white top-[calc(50%-87.2px)] whitespace-nowrap">
        <p className="leading-[1.472] mb-0 text-[79.6px]">Oranji Studio</p>
        <p className="leading-[1.472] text-[38.054px]">Creative Design Agency</p>
      </div>
      <G />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Frame1 />
    </div>
  );
}