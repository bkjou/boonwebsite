// Every figure comes from production on 2026-11-03; the query is in docs/plans.
const NUMBERS = [
  ["23,000+", "AI replies in the last 30 days"],
  ["5,400+", "customer conversations in the last 30 days"],
  ["24/7", "answers, nights and weekends included"],
  ["6", "channels in one inbox"],
];

export default function Numbers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="reveal section-title max-w-4xl">Busy every day, for real businesses</h2>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {NUMBERS.map(([n, label]) => (
          <div key={label}>
            <p className="text-5xl font-semibold">{n}</p>
            <p className="mt-2 text-body">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
