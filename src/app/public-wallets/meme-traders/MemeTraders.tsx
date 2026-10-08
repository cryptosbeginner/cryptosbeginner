"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { featuredTraders, suggestTraderEmail, directorySourceUrl, directorySourceNote } from "./featured-traders";
import { memeTraderFaqs } from "./faqs";

const AFFILIATE_GMGN = "https://gmgn.ai/?ref=XPS1eXg4";
const AFFILIATE_AXIOM = "https://go.cryptosbeginner.com/Axiom";
const AFFILIATE_PADRE = "https://trade.padre.gg/rk/1000xgems";
const AFFILIATE_FOMO = "https://fomo.family/r/cryptosbeginner";
const GMGN_REF = "XPS1eXg4";

type SavedWallet = { address: string; label: string; chain: string; addedAt: string };
const storageKey = "cryptosbeginner-public-wallets";

function shorten(address: string) {
  return address.length > 22 ? `${address.slice(0, 10)}...${address.slice(-8)}` : address;
}

type DetectedChain = "Solana" | "Ethereum" | null;

function detectChain(value: string): DetectedChain {
  const clean = value.trim();
  if (/^0x[a-fA-F0-9]{40}$/.test(clean)) return "Ethereum";
  if (/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(clean)) return "Solana";
  return null;
}

const deepLinks = {
  Solana: [
    { label: "GMGN", href: (a: string) => `https://gmgn.ai/sol/address/${a}?ref=${GMGN_REF}`, note: "Trade history and token activity", sponsored: true },
    { label: "Solscan", href: (a: string) => `https://solscan.io/account/${a}`, note: "Block explorer", sponsored: false },
    { label: "Birdeye", href: (a: string) => `https://birdeye.so/profile/${a}?chain=solana`, note: "Portfolio view", sponsored: false },
  ],
  Ethereum: [
    { label: "GMGN", href: (a: string) => `https://gmgn.ai/eth/address/${a}?ref=${GMGN_REF}`, note: "Trade history and token activity", sponsored: true },
    { label: "Etherscan", href: (a: string) => `https://etherscan.io/address/${a}`, note: "Block explorer", sponsored: false },
  ],
};

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mt-6 space-y-3">
      {memeTraderFaqs.map((item, i) => (
        <div key={item.question} className="rounded-2xl border border-slate-200 bg-white">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="font-black text-slate-950">{item.question}</span>
            <span className="shrink-0 text-xl font-black text-fuchsia-700" aria-hidden="true">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-700">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function MemeTraders() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ address: string; chain: Exclude<DetectedChain, null> } | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [label, setLabel] = useState("");

  function lookup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setCopied(false);
    setSaved(false);
    const clean = input.trim();
    if (!clean) {
      setError("Paste a public wallet address first.");
      return;
    }
    const chain = detectChain(clean);
    if (!chain) {
      setResult(null);
      setError(
        "That value does not look like a Solana or Ethereum public address. Check for typos, and never enter a private key or seed phrase here."
      );
      return;
    }
    setResult({ address: clean, chain });
  }

  async function copyAddress() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Copy failed in this browser. Select the address manually.");
    }
  }

  function saveToBoard() {
    if (!result) return;
    setError("");
    try {
      const raw = window.localStorage.getItem(storageKey);
      const current: SavedWallet[] = raw ? JSON.parse(raw) : [];
      const exists = current.some(
        (w) => w.address.toLowerCase() === result.address.toLowerCase() && w.chain === result.chain
      );
      if (exists) {
        setError("That address is already on your research board for this chain.");
        return;
      }
      const entry: SavedWallet = {
        address: result.address,
        label: label.trim() || "Unlabeled wallet",
        chain: result.chain,
        addedAt: new Date().toISOString(),
      };
      window.localStorage.setItem(storageKey, JSON.stringify([entry, ...current]));
      setSaved(true);
      setLabel("");
    } catch {
      setError("Could not access browser storage. Your board may be disabled in this browser.");
    }
  }

  const links = result ? deepLinks[result.chain] : [];

  return (
    <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
      <section className="relative overflow-hidden bg-[#0b0820] text-white">
        <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Link href="/public-wallets" className="text-sm font-black text-cyan-200 hover:text-white">
            ← Back to public-wallet research board
          </Link>
          <p className="mt-10 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Meme coin research</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[.98] tracking-[-0.055em] sm:text-7xl">
            Look up any public meme coin wallet.
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
              Verify before you trust.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Paste a Solana or Ethereum address to open it on the explorers and trade-data sites researchers
            actually use. This tool resolves nothing by itself: no handles, no identities, no PnL. That is
            deliberate, because fabricated trader profiles are how people get scammed.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section aria-label="Address lookup" className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-7">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Trader wallet lookup</p>
          <h2 className="mt-2 text-2xl font-black">Paste a public address</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Solana (base58) and Ethereum (0x) addresses are detected automatically. Public addresses are safe
            to share. Never enter a private key or seed phrase.
          </p>
          <form onSubmit={lookup} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="meme-trader-address" className="sr-only">
              Public wallet address
            </label>
            <input
              id="meme-trader-address"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Solana or 0x address..."
              autoComplete="off"
              spellCheck={false}
              className="w-full flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-mono text-sm outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-fuchsia-700"
            >
              Look up
            </button>
          </form>
          {error && <p className="mt-4 rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-900">{error}</p>}

          {result && (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-slate-950 px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-white">
                  {result.chain}
                </span>
                <span className="font-mono text-sm text-slate-600">{shorten(result.address)}</span>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <code className="min-w-0 flex-1 break-all rounded-xl bg-white px-4 py-3 font-mono text-xs text-slate-800 sm:text-sm">
                  {result.address}
                </code>
                <button
                  type="button"
                  onClick={copyAddress}
                  className="shrink-0 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-black text-slate-700 hover:border-fuchsia-300 hover:text-fuchsia-700"
                >
                  {copied ? "Copied" : "Copy address"}
                </button>
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Open this address on
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href(result.address)}
                    target="_blank"
                    rel={l.sponsored ? "sponsored noopener noreferrer" : "noopener noreferrer"}
                    title={l.note}
                    className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white transition hover:bg-fuchsia-700"
                  >
                    {l.label} ↗
                  </a>
                ))}
                <Link
                  href={`/wallet-tracker?address=${encodeURIComponent(result.address)}&network=${result.chain.toLowerCase()}`}
                  className="rounded-xl border border-cyan-300 bg-cyan-50 px-4 py-2.5 text-xs font-black text-cyan-800 hover:bg-cyan-100"
                >
                  Open in wallet tracker →
                </Link>
              </div>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Trade memecoins on
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href={AFFILIATE_GMGN}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700"
                >
                  GMGN ↗
                </a>
                <a
                  href={AFFILIATE_AXIOM}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700"
                >
                  Axiom ↗
                </a>
                <a
                  href={AFFILIATE_PADRE}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700"
                >
                  Padre ↗
                </a>
                <a
                  href={AFFILIATE_FOMO}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700"
                >
                  FOMO ↗
                </a>
              </div>
              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                Affiliate links: CryptosBeginner may earn a commission if you trade through them,
                including the GMGN research links above.
              </p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Save to research board
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="meme-trader-label" className="sr-only">
                    Your private label
                  </label>
                  <input
                    id="meme-trader-label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Your private label (e.g. watchlist A)"
                    className="w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
                  />
                  <button
                    type="button"
                    onClick={saveToBoard}
                    className="shrink-0 rounded-xl bg-fuchsia-700 px-5 py-3 text-sm font-black text-white transition hover:bg-fuchsia-800"
                  >
                    Save to research board
                  </button>
                </div>
                {saved && (
                  <p className="mt-3 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                    Saved. It now appears on your{" "}
                    <Link href="/public-wallets" className="font-black underline">
                      research board
                    </Link>
                    , stored only in this browser. Labels are your own hypotheses, not verified identities.
                  </p>
                )}
              </div>
            </div>
          )}
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3" aria-label="Where traders disclose wallets">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">Legit source 1</p>
            <h2 className="mt-2 text-lg font-black">The trader's own X bio or posts</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Some traders pin their wallet in their verified profile or quote-post it themselves. Confirm the
              account is the real one: check verification, account age, and follower history.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">Legit source 2</p>
            <h2 className="mt-2 text-lg font-black">Their pump.fun profile page</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Creators often link their on-chain profile from their launch pages. Open it from the project's
              own links, not from a stranger's reply.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">Legit source 3</p>
            <h2 className="mt-2 text-lg font-black">Project docs and treasuries</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Teams publish treasury and deployer wallets in official docs. These are organizational wallets,
              not personal trading accounts, so read them accordingly.
            </p>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 sm:p-7" aria-label="Verification checklist">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Verify before you trust</p>
            <h2 className="mt-2 text-2xl font-black">Checklist</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
              <li>Trace the address back to the trader's own verified post or profile. No post, no proof.</li>
              <li>Check the wallet's age and first transactions. A "legendary trader" wallet created last week is a red flag.</li>
              <li>Look at the full history, not a screenshot of one win. Losses and failed buys are usually cropped out.</li>
              <li>Ask who funds the wallet. Fresh wallets funded by an unknown source are often someone else's.</li>
              <li>Remember one wallet is never the whole picture. Profits can be hedged, split, or faked across addresses.</li>
            </ol>
          </section>
          <section className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-6 sm:p-7" aria-label="Red flags">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-rose-700">Red flags</p>
            <h2 className="mt-2 text-2xl font-black text-rose-950">Walk away when you see these</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-rose-950/90">
              <li>A fresh wallet being shilled as an OG trader's "new wallet" with no proof from the trader.</li>
              <li>Copy-trading promises: "mirror my wallet, guaranteed 10x." Guarantees are always a lie.</li>
              <li>Paid shill groups that post entries after they already bought, so you become their exit liquidity.</li>
              <li>Anyone asking for your seed phrase, private key, or a "verification deposit" to unlock signals.</li>
              <li>Urgency theater: countdowns, "last 10 spots," and deleted losing calls.</li>
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-[1.5rem] border border-slate-300 bg-slate-950 p-6 text-white sm:p-7" aria-label="Tool limitations">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Honest limits</p>
          <h2 className="mt-2 text-2xl font-black">What this tool cannot do</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-300">
            <li>It cannot resolve an X handle or nickname to a wallet. That mapping is exactly what scammers fake.</li>
            <li>It shows no PnL, win rate, or "trader score." Those numbers are easy to manufacture.</li>
            <li>It cannot verify who owns an address. Ownership claims need the owner's own public proof.</li>
            <li>It cannot tell you whether a trade is safe to copy. Nothing on this page is financial advice.</li>
          </ul>
        </section>

        <section className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 sm:p-7" aria-label="Featured traders">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-fuchsia-700">Curated directory</p>
              <h2 className="mt-2 text-2xl font-black">Featured meme coin traders</h2>
              <p className="mt-2 text-xs text-slate-500">
                Source:{" "}
                <a
                  href={directorySourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-cyan-700 underline"
                >
                  KOLlector
                </a>{" "}
                · {directorySourceNote}. Associations come from pump.fun and fomo profiles, not our
                independent verification. Listing is not an endorsement.
              </p>
            </div>
            <a
              href={`mailto:${suggestTraderEmail}?subject=Featured%20trader%20suggestion`}
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-black text-slate-700 hover:border-fuchsia-300 hover:text-fuchsia-700"
            >
              Suggest a trader
            </a>
          </div>
          {featuredTraders.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8">
              <p className="text-sm leading-7 text-slate-600">
                This directory is empty on purpose. We only list traders whose wallets were disclosed by the
                traders themselves on their own verified channels, and no submission has met that bar yet.
                We will not fill this space with unverified addresses.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Know a trader with a genuine self-disclosure?{" "}
                <a
                  href={`mailto:${suggestTraderEmail}?subject=Featured%20trader%20suggestion`}
                  className="font-black text-fuchsia-700 underline"
                >
                  Email us the link to their post
                </a>
                , and we will review it.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {featuredTraders.map((t) => (
                <div
                  key={`${t.chain}-${t.address}`}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-black text-slate-950">
                      <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-100 text-[10px] font-black text-fuchsia-800">
                        {t.rank}
                      </span>
                      {t.label}
                    </p>
                    <p className="mt-1 font-mono text-xs text-slate-600">{shorten(t.address)}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {t.chain} · via KOLlector ({t.sourceNote}) ·{" "}
                      <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-black text-cyan-700 underline">
                        view profile
                      </a>
                    </p>
                  </div>
                  <Link
                    href={`/wallet-tracker?address=${encodeURIComponent(t.address)}&network=${t.chain.toLowerCase()}`}
                    className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white hover:bg-fuchsia-700"
                  >
                    Read wallet
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-8" aria-label="Frequently asked questions">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">FAQ</p>
          <h2 className="mt-2 text-2xl font-black">Meme coin trader lookup questions</h2>
          <FaqAccordion />
        </section>

        <section className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
          <p>
            <strong className="text-slate-900">Disclaimer:</strong> Educational content only. This page is not
            financial, investment, legal, or tax advice. Researching public wallets does not make copying
            their trades safe. Meme coins are extremely volatile and most go to zero. Availability of linked
            third-party sites depends on their own terms.
          </p>
        </section>
      </div>
    </main>
  );
}
