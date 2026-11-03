const FEATURES = [
  ["AI customer service", "Answers questions from your own knowledge base in Malay, English and Chinese, day and night."],
  ["Sales AI", "Spots buying intent, quotes your real price list and sends the payment link."],
  ["Auto follow-up", "Chases quiet leads on day 2 and day 7 with approved WhatsApp templates. Stops the moment they reply."],
  ["Broadcast", "Send campaigns to the right audience with each customer's name filled in."],
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="section-title max-w-4xl">Everything your sales team needs</h2>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-line/70 bg-white p-6">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal/10 text-teal">●</span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-body">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
