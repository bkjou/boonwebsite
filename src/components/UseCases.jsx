import { useState } from "react";

const CASES = {
  "Customer service": {
    title: "Answer every question in seconds",
    text: "AI replies from your own FAQs and live data, and hands over to staff when a customer needs a person.",
    img: "/img/usecase-service.jpg",
    lines: ["Where is your nearest branch?", "Our Shah Alam branch is open today until 9pm."],
  },
  Sales: {
    title: "Turn chats into paid orders",
    text: "AI quotes your real prices, adds postage and tax, sends the payment link and marks the order paid.",
    img: "/img/usecase-sales.jpg",
    lines: ["Nak order 2, berapa total?", "Total RM127.44 termasuk postage. Ini link bayaran ya."],
  },
  Marketing: {
    title: "Bring quiet customers back",
    text: "Approved templates go out on day 2 and day 7, never twice, and only during waking hours.",
    img: "/img/usecase-marketing.jpg",
    lines: ["Salam puan, masih berminat?", "Ya! Boleh saya tempah sekarang?"],
  },
};

export default function UseCases() {
  const [tab, setTab] = useState("Customer service");
  const c = CASES[tab];
  return (
    <section id="use-cases" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="reveal section-title max-w-4xl">Built for teams like yours</h2>
        <div className="mt-10 flex flex-wrap gap-2">
          {Object.keys(CASES).map((name) => (
            <button
              key={name}
              onClick={() => setTab(name)}
              className={`btn ${name === tab ? "bg-ink text-white" : "border border-line bg-white text-sub hover:text-ink"}`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-16 md:grid-cols-2">
          <div>
            <h3 className="text-3xl leading-[42px] font-semibold">{c.title}</h3>
            <p className="mt-4 text-body">{c.text}</p>
          </div>
          <div className="relative">
            <img key={c.img} src={c.img} alt={c.title} className="fade-in w-full rounded-2xl" />
            <div className="absolute right-4 bottom-4 left-4 space-y-2 text-sm md:right-8 md:left-auto md:w-72">
              <p className="w-fit max-w-[90%] rounded-xl rounded-tl-none bg-white/90 px-3 py-2 shadow-md backdrop-blur">{c.lines[0]}</p>
              <p className="ml-auto w-fit max-w-[90%] rounded-xl rounded-tr-none bg-teal px-3 py-2 text-white shadow-md">{c.lines[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
