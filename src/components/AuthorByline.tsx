export default function AuthorByline({ updated }: { updated: string }) {
  return (
    <div className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6">
      <div
        aria-hidden="true"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-700 text-base font-black text-white"
      >
        AR
      </div>
      <div>
        <p className="text-sm font-black text-slate-950">
          Alex Rivera{" "}
          <span className="font-normal text-slate-500">
            · Crypto researcher, CryptosBeginner
          </span>
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Every review is research-led: specs, fees, and availability are checked
          against official sources before publication and re-checked on every
          update. Affiliate links never influence verdicts. Last reviewed{" "}
          {updated}.
        </p>
      </div>
    </div>
  );
}
