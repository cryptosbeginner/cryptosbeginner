import type { ReactNode } from "react";

export function GuideH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 text-2xl font-black tracking-[-0.02em] text-slate-950 sm:text-3xl">
      {children}
    </h2>
  );
}

export function GuideH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 text-lg font-black text-slate-950">{children}</h3>
  );
}

export function GuideP({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

export function Callout({
  tone = "indigo",
  title,
  children,
}: {
  tone?: "indigo" | "amber" | "emerald" | "rose" | "cyan";
  title: string;
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    rose: "border-rose-200 bg-rose-50 text-rose-950",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-950",
  };
  return (
    <div className={`mt-6 rounded-2xl border p-5 sm:p-6 ${tones[tone]}`}>
      <p className="text-sm font-black uppercase tracking-[0.12em] opacity-70">{title}</p>
      <div className="mt-2 text-sm leading-7">{children}</div>
    </div>
  );
}

export function StepList({ steps }: { steps: Array<{ title: string; body: string }> }) {
  return (
    <ol className="mt-6 space-y-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
            {i + 1}
          </span>
          <div>
            <p className="font-black text-slate-950">{step.title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-7 text-slate-600">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-fuchsia-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function WarningList({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl border border-rose-200 bg-rose-50 p-4 sm:p-5"
        >
          <p className="font-black text-rose-950">{item.title}</p>
          <p className="mt-1 text-sm leading-6 text-rose-900/80">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
