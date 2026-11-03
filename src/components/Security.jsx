const ITEMS = [
  ["Your data stays yours", "Each business's data is kept apart; one tenant can never see another."],
  ["Not used to train AI", "Your conversations are never used to train models."],
  ["Safe replies", "Guards stop wrong prices, invented branches and refund promises before they reach a customer."],
];

export default function Security() {
  return (
    <section id="security" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="section-title max-w-4xl">Built for security. Designed for peace of mind.</h2>
        <img src="/img/security.jpg" alt="Separate, protected data for every business" className="mt-14 w-full rounded-3xl" />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {ITEMS.map(([title, text]) => (
            <div key={title}>
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal/10 text-teal">🔒</span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-body">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
