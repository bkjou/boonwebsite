
const POINTS = [
  ["One inbox for every channel", "WhatsApp, Facebook, Instagram, Telegram and your website chat, side by side."],
  ["AI first, people when needed", "When AI is unsure it hands the chat to your staff and stays quiet."],
  ["Every chat ends with a summary", "Products, dates and outlets are saved on the customer card automatically."],
];

export default function InboxSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="reveal section-title">
          All in one <span className="text-teal">inbox</span>
        </h2>
        <div className="mt-14 grid items-center gap-16 md:grid-cols-2">
          <ul className="space-y-8">
            {POINTS.map(([title, text]) => (
              <li key={title} className="border-l-2 border-teal pl-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-body">{text}</p>
              </li>
            ))}
          </ul>
          <img src="/img/inbox.jpg" alt="Every channel flowing into one inbox" className="reveal w-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
