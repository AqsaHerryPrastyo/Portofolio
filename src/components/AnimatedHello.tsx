import { useState, useEffect, useRef } from 'react';
import Hello from '../imports/Hello';
import HelloDa from '../imports/HelloDa';
import HelloCs from '../imports/HelloCs';
import HelloHr from '../imports/HelloHr';
import HelloZhHant from '../imports/HelloZhHant';
import HelloZhHans from '../imports/HelloZhHans';
import HelloZhHk from '../imports/HelloZhHk';
import HelloCa from '../imports/HelloCa';
import HelloBg from '../imports/HelloBg';
import HelloAr from '../imports/HelloAr';
import HelloIt from '../imports/HelloIt';
import HelloId from '../imports/HelloId';
import Hungarian from '../imports/Hungarian';
import HelloHi from '../imports/HelloHi';
import HelloHe from '../imports/HelloHe';
import HelloEl from '../imports/HelloEl';
import HelloDe from '../imports/HelloDe';
import HelloFr from '../imports/HelloFr';
import HelloFi from '../imports/HelloFi';
import HelloNl from '../imports/HelloNl';
import HelloRu from '../imports/HelloRu';
import HelloRo from '../imports/HelloRo';
import HelloPtBr from '../imports/HelloPtBr';
import HelloPt from '../imports/HelloPt';
import HelloPl from '../imports/HelloPl';
import HelloNb from '../imports/HelloNb';
import HelloMs from '../imports/HelloMs';
import HelloKo from '../imports/HelloKo';
import HelloKk from '../imports/HelloKk';
import HelloJa from '../imports/HelloJa';
import HelloVi from '../imports/HelloVi';
import HelloUk from '../imports/HelloUk';
import HelloTr from '../imports/HelloTr';
import HelloTh from '../imports/HelloTh';
import HelloSv from '../imports/HelloSv';
import HelloEs from '../imports/HelloEs';
import HelloSk from '../imports/HelloSk';

// Intrinsic dimensions of each Hello SVG component (from their Group div)
const helloMeta = [
  { Component: Hello,       h: 184.905, w: 621.355 },
  { Component: HelloZhHans, h: 204.965, w: 475.412 },
  { Component: HelloZhHant, h: 221.643, w: 445.231 },
  { Component: HelloZhHk,   h: 205.768, w: 450.808 },
  { Component: HelloAr,     h: 210.918, w: 541.935 },
  { Component: HelloCa,     h: 184.904, w: 545.263 },
  { Component: HelloDa,     h: 260.833, w: 368.254 },
  { Component: HelloCs,     h: 260.833, w: 495.884 },
  { Component: HelloBg,     h: 259.981, w: 926.055 },
  { Component: HelloHr,     h: 187.998, w: 1201.929 },
  { Component: HelloIt,     h: 99.01,   w: 483.613 },
  { Component: HelloId,     h: 184.905, w: 554.445 },
  { Component: Hungarian,   h: 184.905, w: 621.355 },
  { Component: HelloHi,     h: 257.544, w: 589.487 },
  { Component: HelloHe,     h: 200.744, w: 391.315 },
  { Component: HelloEl,     h: 230.769, w: 831.419 },
  { Component: HelloDe,     h: 184.905, w: 652.459 },
  { Component: HelloFr,     h: 263.926, w: 931.495 },
  { Component: HelloFi,     h: 184.902, w: 357.421 },
  { Component: HelloNl,     h: 184.905, w: 652.459 },
  { Component: HelloRu,     h: 248.293, w: 908.651 },
  { Component: HelloRo,     h: 184.784, w: 647.526 },
  { Component: HelloPtBr,   h: 184.784, w: 366.697 },
  { Component: HelloPt,     h: 184.784, w: 366.696 },
  { Component: HelloPl,     h: 174.194, w: 593.866 },
  { Component: HelloNb,     h: 184.902, w: 357.421 },
  { Component: HelloMs,     h: 184.905, w: 523.341 },
  { Component: HelloKo,     h: 248.387, w: 1122.329 },
  { Component: HelloKk,     h: 100,     w: 715.424 },
  { Component: HelloJa,     h: 168.32,  w: 862.947 },
  { Component: HelloVi,     h: 184.905, w: 993.052 },
  { Component: HelloUk,     h: 248.293, w: 883.74 },
  { Component: HelloTr,     h: 187.996, w: 1034.333 },
  { Component: HelloTh,     h: 256.824, w: 683.623 },
  { Component: HelloSv,     h: 260.833, w: 368.253 },
  { Component: HelloEs,     h: 184.903, w: 545.263 },
  { Component: HelloSk,     h: 260.833, w: 495.884 },
];

// Utility to shuffle an array
function shuffleArray(array: number[]) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function AnimatedHello() {
  const [sequence, setSequence] = useState(() => shuffleArray(Array.from({ length: helloMeta.length }, (_, i) => i)));
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [targetH, setTargetH] = useState(58);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setTargetH(36);
      } else if (window.innerWidth < 768) {
        setTargetH(46);
      } else {
        setTargetH(58);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setStep(prevStep => {
          if (prevStep + 1 >= helloMeta.length) {
            setSequence(prevSeq => {
              const lastElement = prevSeq[prevSeq.length - 1];
              const newSeq = shuffleArray(Array.from({ length: helloMeta.length }, (_, i) => i));
              // Ensure the same component doesn't appear back-to-back when new sequence starts
              if (newSeq[0] === lastElement) {
                [newSeq[0], newSeq[1]] = [newSeq[1], newSeq[0]];
              }
              return newSeq;
            });
            return 0;
          }
          return prevStep + 1;
        });
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentIndex = sequence[step];
  const { Component, h, w } = helloMeta[currentIndex];
  const scale = targetH / h;
  const scaledW = Math.round(w * scale);

  return (
    <>
      {/* Global style for purple stroke override */}
      <style>{`
        .hello-scale-wrap svg path {
          stroke: #8B5CF6 !important;
        }
      `}</style>
      <div
        style={{
          display: 'inline-block',
          width: scaledW,
          height: targetH,
          overflow: 'visible',
          flexShrink: 0,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        {/* This div has the exact intrinsic size → Hello SVG renders correctly */}
        <div
          className="hello-scale-wrap"
          style={{
            width: w,
            height: h,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {/* Give exact dimensions so size-full works */}
          <div style={{ width: w, height: h, position: 'relative' }}>
            <Component />
          </div>
        </div>
      </div>
    </>
  );
}
