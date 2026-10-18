import { getWorkedExamples } from "./worked-examples";

function fmt(amount: number): string {
  const sign = amount < 0 ? "-" : amount > 0 && amount !== 0 ? "" : "";
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
}

export default function WorkedExamples({ slug }: { slug: string }) {
  const examples = getWorkedExamples(slug);
  if (examples.length === 0) return null;
  return (
    <section className="mt-10">
      <p className="text-xs font-black uppercase tracking-[0.17em] text-indigo-700">
        Worked examples
      </p>
      <h2 className="mt-2 text-2xl font-black tracking-[-0.03em]">
        What the fees look like on a real transaction
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
        Line-by-line walkthroughs built from each card's published fee schedule.
        ATM operator surcharges and exchange-rate spreads can add costs on top.
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {examples.map((example) => (
          <div
            key={example.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h3 className="text-base font-black">{example.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-600">{example.scenario}</p>
            <dl className="mt-4 divide-y divide-slate-100 rounded-xl bg-slate-50 px-4">
              {example.lines.map((line) => (
                <div
                  key={line.label}
                  className="flex items-center justify-between py-2.5 text-sm"
                >
                  <dt className="text-slate-600">{line.label}</dt>
                  <dd
                    className={`font-black tabular-nums ${
                      line.amount < 0 ? "text-rose-600" : "text-slate-950"
                    }`}
                  >
                    {line.amount < 0 ? fmt(line.amount) : fmt(line.amount)}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm font-black leading-6 text-slate-950">
              {example.result}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-400">{example.sourceNote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
