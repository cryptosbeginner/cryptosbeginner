"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  deadProjects,
  lifecycleLabels,
  type Lifecycle,
} from "./dead-projects";

const lifecycleFilters: Array<"All" | Lifecycle> = [
  "All",
  "enforcement",
  "insolvency",
  "protocol-failure",
  "abandoned",
  "obsolete",
];

function lifecycleClass(lifecycle: Lifecycle) {
  if (lifecycle === "enforcement") return "bg-rose-100 text-rose-800";
  if (lifecycle === "insolvency") return "bg-orange-100 text-orange-800";
  if (lifecycle === "protocol-failure") return "bg-amber-100 text-amber-900";
  if (lifecycle === "abandoned") return "bg-indigo-100 text-indigo-800";
  return "bg-teal-100 text-teal-800";
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function DeadProjectsExplorer() {
  const [query, setQuery] = useState("");
  const [lifecycle, setLifecycle] = useState<"All" | Lifecycle>("All");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return deadProjects.filter((project) => {
      const haystack = [
        project.name,
        project.ticker ?? "",
        project.type,
        project.status,
        project.lifecycle,
        project.era,
        project.summary,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      const matchesLifecycle =
        lifecycle === "All" || project.lifecycle === lifecycle;
      return matchesQuery && matchesLifecycle;
    });
  }, [query, lifecycle]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
            Search
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, ticker, era or failure type"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {lifecycleFilters.map((item) => {
            const active = lifecycle === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setLifecycle(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  active
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-rose-300"
                }`}
              >
                {item === "All" ? "All lifecycles" : lifecycleLabels[item]}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-slate-600">
          Showing {filtered.length} of {deadProjects.length} researched cases.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">
                {initials(project.name)}
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${lifecycleClass(project.lifecycle)}`}
              >
                {lifecycleLabels[project.lifecycle]}
              </span>
            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">
              {project.type}
              {project.ticker ? ` · ${project.ticker}` : ""} · {project.era}
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">
              {project.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {project.summary}
            </p>

            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-500">Status</dt>
                <dd className="mt-1 text-slate-800">{project.status}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Last known activity</dt>
                <dd className="mt-1 text-slate-800">{project.lastKnownActivity}</dd>
              </div>
            </dl>

            <Link
              href={`/projects/dead/${project.slug}`}
              className="mt-5 inline-flex text-sm font-bold text-rose-700 hover:underline"
            >
              Open case file →
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-600">
          No cases match those filters.
        </p>
      )}
    </div>
  );
}
