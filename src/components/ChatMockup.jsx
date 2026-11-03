// Made-up demo chats only, never real customers.
const ROWS = [
  ["Aisyah", "Berapa harga pakej ini?", true],
  ["Daniel", "Can I book for Saturday?", false],
  ["Mei Ling", "有没有优惠？", false],
  ["Farid", "Dah bayar, terima kasih!", false],
];

export default function ChatMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-full bg-teal/25 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-line/70 bg-white shadow-2xl shadow-ink/10">
        <div className="flex items-center gap-2 border-b border-line/60 px-4 py-3 text-xs text-muted">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 font-medium text-sub">Inbox · Open 12</span>
        </div>
        <div className="grid grid-cols-5">
          <ul className="col-span-2 border-r border-line/60 text-sm">
            {ROWS.map(([name, text, active]) => (
              <li key={name} className={`px-4 py-3 ${active ? "bg-teal/10" : ""}`}>
                <p className="font-medium">{name}</p>
                <p className="truncate text-xs text-muted">{text}</p>
              </li>
            ))}
          </ul>
          <div className="col-span-3 space-y-3 bg-soft/60 p-4 text-sm">
            <p className="w-fit max-w-[85%] rounded-xl rounded-tl-none bg-white px-3 py-2 shadow-sm">Berapa harga pakej ini?</p>
            <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-tr-none bg-teal px-3 py-2 text-white">
              Pakej ini RM59 ya puan 😊 Nak saya hantar link tempahan?
            </p>
            <p className="w-fit rounded-xl rounded-tl-none bg-white px-3 py-2 shadow-sm">Boleh!</p>
            <p className="ml-auto w-fit rounded-full bg-ink px-3 py-1 text-xs text-white">AI replied in 3s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
