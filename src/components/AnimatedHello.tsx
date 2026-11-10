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
  const [sequence, setSequence] = useState(() =>
    shuffleArray(Array.from({ length: helloMeta.length }, (_, i) => i)),
  );
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [targetH, setTargetH] = useState(66);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const apply = () => {
      if (window.innerWidth < 480) setTargetH(36);
      else if (window.innerWidth < 768) setTargetH(46);
      else setTargetH(66);
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      setVisible(false);
      timeoutRef.current = window.setTimeout(() => {
        setStep((prev) => {
          if (prev + 1 < helloMeta.length) return prev + 1;
          setSequence((prevSeq) => {
            const next = shuffleArray(
              Array.from({ length: helloMeta.length }, (_, i) => i),
            );
            if (next[0] === prevSeq[prevSeq.length - 1]) {
              [next[0], next[1]] = [next[1], next[0]];
            }
            return next;
          });
          return 0;
        });
        setVisible(true);
      }, 400);
    }, 3500);

    return () => {
      window.clearInterval(interval);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  // Reserve the widest greeting so the headline never shifts between words.
  const slotWidth = Math.ceil(
    Math.max(...helloMeta.map((m) => (targetH / m.h) * m.w)),
  );

  const { Component, h, w } = helloMeta[sequence[step]];
  const scale = targetH / h;
  const scaledW = Math.round(w * scale);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: slotWidth,
        height: targetH,
        flexShrink: 0,
      }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0"
        style={{
          width: scaledW,
          height: targetH,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        <div
          className="hello-scale-wrap"
          style={{
            width: w,
            height: h,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <div style={{ width: w, height: h, position: 'relative' }}>
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}
