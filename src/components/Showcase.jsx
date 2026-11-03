import { useEffect, useRef } from "react";

// Floating product cards around a teal glass panel. Each card drifts at its own
// speed as the page scrolls (data-speed), plus a slow idle float. Demo data only.
function Card({ className, speed, children }) {
  return (
    <div data-speed={speed} className={`parallax absolute ${className}`}>
      <div className="bob rounded-xl border border-white/70 bg-white/80 shadow-[0_24px_50px_-20px_rgba(15,23,42,.25)] backdrop-blur">
        {children}
      </div>
    </div>
  );
}

function Avatar({ letter, color }) {
  return <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-lg font-semibold text-white ${color}`}>{letter}</span>;
}

export default function Showcase() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    const cards = root.querySelectorAll(".parallax");
    let raf = 0;
    const move = () => {
      raf = 0;
      const r = root.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - (r.top + r.height / 2)) / window.innerHeight; // -1 .. 1 around centre
      cards.forEach((c) => {
        c.style.transform = `translate3d(0, ${progress * Number(c.dataset.speed) * -160}px, 0)`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(move); };
    move();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative mx-auto h-[640px] max-w-6xl overflow-hidden px-6 md:h-[720px] md:overflow-visible">
      {/* teal glass panel */}
      <div className="absolute top-1/2 left-1/2 h-[420px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-b from-teal/25 via-teal/15 to-teal/5 md:h-[480px] md:w-[420px]" />
      <p className="absolute top-1/2 left-1/2 w-52 -translate-x-1/2 -translate-y-1/2 text-center text-base font-medium leading-6">
        Everything you need in a modern customer chat tool
      </p>

      <Card speed="0.6" className="top-[6%] left-[2%] w-72 md:top-[10%] md:left-[8%] md:w-80">
        <div className="p-4">
          <p className="text-sm font-medium">AI reply rate</p>
          <svg viewBox="0 0 280 90" className="mt-3 w-full">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#2bb6a3" stopOpacity=".25" />
                <stop offset="1" stopColor="#2bb6a3" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 60 C30 30 50 30 70 50 S110 95 130 60 S170 5 200 25 S250 30 280 25 L280 90 L0 90Z" fill="url(#g)" />
            <path d="M0 60 C30 30 50 30 70 50 S110 95 130 60 S170 5 200 25 S250 30 280 25" fill="none" stroke="#2bb6a3" strokeWidth="2" />
          </svg>
          <span className="mt-1 inline-block rounded bg-ink/60 px-2 py-0.5 text-xs text-white">96% · this week</span>
        </div>
      </Card>

      <Card speed="1.1" className="top-[18%] right-[2%] md:top-[18%] md:right-[18%]">
        <div className="flex items-center gap-3 px-5 py-4">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">🤖</span>
          <span className="text-xl font-medium">AI agent</span>
        </div>
      </Card>

      <Card speed="0.9" className="top-[34%] right-[0%] w-72 md:top-[33%] md:right-[8%]">
        <div className="flex items-center gap-4 p-4">
          <Avatar letter="R" color="bg-sky-500" />
          <div className="flex-1">
            <p className="font-medium">Rizal</p>
            <p className="text-sm text-body">Nak tukar tarikh booking</p>
          </div>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-red-500 text-sm text-white">1</span>
        </div>
      </Card>

      <Card speed="1.4" className="bottom-[22%] left-[0%] w-64 md:bottom-[24%] md:left-[12%]">
        <div className="flex items-center gap-4 p-4">
          <Avatar letter="A" color="bg-pink-400" />
          <div>
            <p className="font-medium">Aisyah</p>
            <p className="text-sm text-body">Berminat! 😍</p>
          </div>
        </div>
      </Card>

      <Card speed="0.4" className="right-[2%] bottom-[8%] w-80 md:right-[6%] md:bottom-[16%]">
        <div className="p-4">
          <div className="flex items-start gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-amber-100 text-3xl">🔮</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Order #1042</p>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">Paid</span>
              </div>
              <p className="mt-1 flex justify-between text-sm text-body"><span>Crystal ball 8cm</span><span>x1</span></p>
              <p className="flex justify-between text-sm text-body"><span>Postage</span><span>x1</span></p>
            </div>
          </div>
          <p className="mt-4 flex justify-between text-sm"><span className="text-body">Total</span><span className="font-semibold">RM 71.00</span></p>
        </div>
      </Card>

      <Card speed="1.8" className="bottom-[0%] left-[30%] hidden w-60 md:block md:left-[36%]">
        <div className="grid h-36 place-items-center rounded-t-xl bg-soft text-6xl">📣</div>
        <div className="p-3">
          <p className="text-sm font-medium">11.11 sale is live!</p>
          <p className="mt-1 text-xs text-muted">Broadcast · 1,200 customers</p>
        </div>
      </Card>
    </section>
  );
}
