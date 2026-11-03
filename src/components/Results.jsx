// Real outcomes from production, shown without customer names.
const RESULTS = [
  ["29 leads", "followed up in one 30-minute round, each exactly once"],
  ["0 double sends", "one message per customer per round, by design"],
  ["Price guard", "every RM figure is checked against the real price list before it is sent"],
];

export default function Results() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="reveal section-title max-w-4xl">Results you can check</h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {RESULTS.map(([head, text]) => (
          <div key={head} className="rounded-2xl border border-line/70 bg-white p-8">
            <p className="text-3xl font-semibold">{head}</p>
            <p className="mt-3 text-body">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
