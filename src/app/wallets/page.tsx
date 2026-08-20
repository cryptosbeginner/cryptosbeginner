import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crypto Wallets Explained: Types, Safety and Fun Facts",
  description:
    "Beginner guide to crypto wallets in 2026. Hot vs cold, hardware vs software, custodial vs self-custody, plus safety tips and incident lessons.",
};

export default function WalletsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              Wallets · Updated 2026
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Crypto Wallets: How They Work and Which Type to Use
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Wallets do not store coins, they store keys. Understanding
              the difference between hot and cold, hardware and software,
              custodial and self custody is the starting point for
              staying safe.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="max-w-4xl mx-auto px-4 pt-6">
          <Image
            src="/images/wallets-hero.png"
            alt="Illustration of hardware, mobile and browser crypto wallets"
            width={1200}
            height={630}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 object-cover"
            priority
          />
        </section>

        {/* What is a wallet */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            What is a crypto wallet really?
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            A wallet is a tool that manages your private keys and signs
            transactions. Coins themselves sit on blockchains as
            balances attached to addresses. When you “send” crypto, your
            wallet signs a transaction that tells the network to move
            value from one address to another.
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            This is why losing a recovery phrase or exposing private keys
            is fatal. Anyone who gets those keys can sign transactions
            as if they were you and empty the wallet.
          </p>
        </section>

        {/* Types of wallets */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Main wallet types and how they differ
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Custodial vs self custody
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>
                  Custodial wallets are exchange accounts. The company
                  holds the keys and you log in with email and password.
                </li>
                <li>
                  Self custody wallets give you a recovery phrase or key
                  file. You are responsible for security and backups.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hot vs cold storage
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>
                  Hot wallets stay connected to the internet. They are
                  convenient for everyday use but exposed to more
                  attack paths.
                </li>
                <li>
                  Cold wallets keep keys offline. They are slower to use
                  but much safer for long term holdings.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hardware and software wallets */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Hardware vs software wallets
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hardware wallets
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Hardware wallets are dedicated devices that store keys
                in secure chips and sign transactions on the device.
                Brands such as Ledger and Trezor are widely used by
                long term holders who want to keep keys off phones and
                laptops.
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                They are not perfect. Past incidents have shown data
                breaches and firmware bugs that affected users, which is
                why you should buy only from official sources and keep
                recovery phrases entirely offline.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Software and mobile wallets
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Software wallets run as apps on your phone or browser.
                Examples include MetaMask and mobile wallets such as
                SafePal. They are ideal for DeFi, NFTs and everyday
                on-chain activity but depend heavily on device security
                and app hygiene.
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                For many people, a simple pattern works: mobile wallet
                for small spending, hardware wallet for savings and
                exchange account for short term trading.
              </p>
            </div>
          </div>

          {/* Types diagram */}
          <div className="mt-8">
            <Image
              src="/images/wallets-types-diagram.png"
              alt="Diagram comparing exchange accounts, hardware wallets, mobile app wallets and browser wallets"
              width={1200}
              height={800}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 object-cover"
            />
          </div>
        </section>

        {/* Fun facts and incidents */}
        <section className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Fun facts and real incident lessons
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              Early exchange failures like Mt. Gox pushed many people
              toward self custody and hardware wallets.
            </li>
            <li>
              Data leaks at wallet companies have shown that even
              marketing databases are sensitive, because they reveal who
              owns hardware wallets.
            </li>
            <li>
              Firmware bugs can affect randomness or signing logic,
              reminding users that large holdings deserve defence in
              depth, not one device alone.
            </li>
          </ul>
          <p className="mt-4 leading-7 text-slate-700">
            You can explore individual incidents on our{" "}
            <Link
              href="/security/exchange-incidents"
              className="text-indigo-700"
            >
              security incidents timeline
            </Link>{" "}
            to see how different wallet and exchange failures unfolded.
          </p>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-slate-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Simple wallet plan for beginners
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Trade on a reputable exchange with strong security,
              withdraw medium and long term holdings to a hardware
              wallet, and keep recovery phrases in offline backups.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://go.cryptosbeginner.com/LedgerWallet"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Ledger wallets
              </a>
              <a
                href="https://go.cryptosbeginner.com/TrezorSafe"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Trezor wallets
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-t">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-slate-600">
            <p>
              Educational content only. Not financial or security advice.
              Think carefully about where you keep keys and what would
              happen if a device or backup failed.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}