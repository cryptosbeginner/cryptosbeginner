import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

const SITE_URL = "https://www.cryptosbeginner.com";
const PAGE_URL = `${SITE_URL}/tools/dogpay-review`;
const UPDATED = "16 October 2026";
const UPDATED_ISO = "2026-10-16";
const AFFILIATE = "https://go.cryptosbeginner.com/DogPay";
const REF_CODE = "75490586";

const REVIEWER = {
  name: "Maria Santos",
  initials: "MS",
  role: "Fintech analyst, CryptosBeginner",
};

export const metadata: Metadata = {
  title: "DogPay Review 2026: Crypto Cards, Fees, USD Account Tested",
  description:
    "October 2026 DogPay review: Visa and Mastercard crypto cards, Global/American/Singapore BINs, membership tiers, real fee tables from the app, USD bank account, and how to sign up with a referral.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "DogPay Review 2026: Crypto Cards, Fees, USD Account Tested",
    description:
      "Hands-on DogPay review: crypto-to-fiat Visa and Mastercard cards, real membership fees and card fee tables captured in-app, USD bank account, and supported networks.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/tools/dogpay/dogpay-money-home.jpg`,
        width: 1080,
        height: 2400,
        alt: "DogPay app Money tab showing total USD balance with Deposit, Transfer, Red packet, Bank, Card, Swap, Esim and Scan options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DogPay Review 2026",
    description: "DogPay tested: crypto cards, membership tiers, real fees, USD account, and signup guide.",
    images: [`${SITE_URL}/images/tools/dogpay/dogpay-money-home.jpg`],
  },
};

const faqItems = [
  {
    question: "What is DogPay?",
    answer:
      "DogPay is a mobile app that turns crypto into spendable money. You deposit crypto like USDT, USDC, BTC, ETH, SOL, or DOGE, and spend it through Visa and Mastercard virtual or physical cards, or through a USD bank account the app can open for you. It also offers transfers, swaps, red packets, and even eSIM top-ups. It is available on iPhone and Android.",
  },
  {
    question: "Is DogPay a bank?",
    answer:
      "No. DogPay describes itself as a digital finance and payment infrastructure platform, not a bank. Accounts and cards are provided through its regulated financial institution partners, which independently review and approve applications. Its published registrations include a US FinCEN MSB registration (31000285417699) and Canadian FINTRAC MSB registration (C100000785), plus a Bank of Canada PSP registration.",
  },
  {
    question: "What does a DogPay card cost?",
    answer:
      "A virtual card costs 10 USD to issue. Physical cards are also offered and can be upgraded from a virtual card. On top of issuance, each card has its own transaction fee schedule that depends on its BIN region (American, Singapore, or Global) and network (Visa or Mastercard). Membership tiers lower your card top-up fee: Basic 1%, Premium 0.8%, Platinum 0.5%, Ultra 0.3%.",
  },
  {
    question: "What are the DogPay membership tiers?",
    answer:
      "There are four tiers. Basic is free and allows 2 active cards with a 1% card top-up fee. Premium costs 4.90 USD per month, allows 5 active cards, 0.8% top-up fee, and an 80 USD bank account opening fee. Platinum costs 9.90 USD per month, allows 10 active cards, 0.5% top-up fee, and a 50 USD bank account opening fee. Ultra costs 29.80 USD per month, allows 20 active cards, 0.3% top-up fee, and a 0 USD bank account opening fee.",
  },
  {
    question: "Do I need KYC to use DogPay?",
    answer:
      "Yes. The app requires identity verification (KYC) before it will issue a card. The verification screen asks for basic personal information, an ID document, and a facial recognition check, and says it takes a few minutes. Without completed KYC, card issuance stays unavailable.",
  },
  {
    question: "Which crypto and networks does DogPay support?",
    answer:
      "The app supports USDT, USDC, DOGE, BTC, SOL, and ETH. For deposits, you can choose from Ethereum, Tron, Solana, Base, Arbitrum, BNB Smart Chain, and Polygon networks. Pick the network that matches where your funds already are to avoid extra bridging costs.",
  },
  {
    question: "Does DogPay work with Apple Pay and Google Pay?",
    answer:
      "Yes. The app's supported apps screen confirms both Google Pay and Apple Pay, plus 3D Secure (3DS) for online payments. It also lists compatibility with Amazon and with AI service payments including the Anthropic API, Claude, OpenAI API, and Midjourney, which makes it popular for paying for subscriptions and API bills with crypto.",
  },
  {
    question: "Is DogPay available in my country?",
    answer:
      "DogPay says its services are affected by the financial institution, product, jurisdiction, and compliance requirements, and that services are not offered in Mainland China or certain restricted regions. Card BIN regions include American, Singapore, and Global options. Check availability in the app for your country before depositing funds.",
  },
  {
    question: "How do I sign up for DogPay with a referral?",
    answer:
      "Use a referral link when you register, then download the app, complete KYC, and you can apply for a virtual card. Our referral link is https://go.cryptosbeginner.com/DogPay and the referral code is 75490586. Using the referral ID can unlock card benefits shown in the app.",
  },
];

function PrimaryAffiliateButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={AFFILIATE}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{ color: "#ffffff", textDecoration: "none" }}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-center text-sm font-bold transition hover:bg-emerald-700 ${className}`}
    >
      {children}
    </a>
  );
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24 px-4 pb-12">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-slate-600">{children}</p>;
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="mt-8">
      <Image
        src={src}
        alt={alt}
        width={540}
        height={1170}
        className="mx-auto h-auto w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm"
      />
      <figcaption className="mt-2 text-center text-xs leading-5 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <p className="font-black text-amber-900">{title}</p>
      <div className="mt-2 text-sm leading-7 text-amber-950/80">{children}</div>
    </div>
  );
}

export default function DogPayReviewPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DogPay Review 2026: Crypto Cards, Fees, USD Account Tested",
    description:
      "Hands-on DogPay review: crypto-to-fiat Visa and Mastercard cards, real membership fees and card fee tables captured in-app, USD bank account, and signup guide.",
    datePublished: UPDATED_ISO,
    dateModified: UPDATED_ISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Person", name: REVIEWER.name, url: SITE_URL },
    publisher: { "@type": "Organization", name: "CryptosBeginner", url: SITE_URL },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="min-h-screen bg-[#f7f7fb] text-slate-950">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Tools · crypto cards</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              DogPay review 2026: spend crypto with Visa and Mastercard
            </h1>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Updated {UPDATED} · Tested on the live app for CryptosBeginner
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Virtual and physical crypto cards, a USD bank account, real fee tables captured
              inside the app, and support for Apple Pay, Google Pay, and AI subscriptions. Here is
              the honest, screen-by-screen breakdown of DogPay.
            </p>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get DogPay with referral code {REF_CODE}</PrimaryAffiliateButton>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pt-10">
          <AuthorByline updated={UPDATED} reviewer={REVIEWER} />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4">
          <PreferredSourceBadge />
        </div>
        <div className="mx-auto max-w-4xl px-4 pt-4 text-xs leading-6 text-slate-500">
          <strong className="text-slate-700">Affiliate disclosure:</strong> we may earn a commission
          if you sign up through our referral link, at no extra cost to you. Using referral code{" "}
          {REF_CODE} can unlock card benefits in the app.{" "}
          <strong className="text-slate-700">Risk warning:</strong> crypto is volatile and card
          programs can change fees or availability. Educational content, not financial advice.
        </div>

        <div className="py-10">
          <Section id="what-it-is">
            <H2>What DogPay is</H2>
            <P>
              DogPay is a mobile app that bridges crypto and everyday spending. You deposit
              cryptocurrency, and the app gives you ways to spend it: Visa and Mastercard virtual
              cards for online payments, a physical card for in-store use, and a USD bank account
              you can open inside the app for sending and receiving dollars.
            </P>
            <P>
              The home screen, called Money, puts everything one tap away: Deposit, Transfer, Red
              packet, Bank, Card, Swap, eSIM, Scan, and a Market view with live prices for USDT,
              USDC, DOGE, BTC, SOL, and ETH. It is a full spending toolkit, not just a single card.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-money-home.jpg"
              alt="DogPay app Money tab showing total USD balance with Deposit, Transfer, Red packet, Bank, Card, Swap, Esim and Scan options"
              caption="The Money tab is mission control: every spending feature lives here."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-market-list.jpg"
              alt="DogPay app market list showing live prices for USDT, USDC, DOGE, BTC, SOL and ETH with mini price charts"
              caption="The Market view tracks the six supported assets with live prices."
            />
          </Section>

          <Section id="company">
            <H2>Company background: who runs DogPay</H2>
            <P>
              DogPay presents itself as a digital finance and payment infrastructure platform, not
              a bank. That distinction matters: your accounts and cards are provided through its
              regulated financial institution partners, which independently review and approve
              applications. DogPay states it holds a US FinCEN money services business registration
              (31000285417699) and Canadian registrations including a FINTRAC MSB registration
              (C100000785) and a Bank of Canada payment service provider registration. It also
              advertises PCI-DSS Level 1 certification for card data security.
            </P>
            <P>
              The business side of DogPay serves cross-border companies with USD business accounts
              and multi-currency accounts in Hong Kong and Singapore, plus payment APIs. The
              consumer app reviewed here is the retail product: cards, a USD account, and transfers.
              DogPay states its services are not offered in Mainland China or certain restricted
              regions, and that availability depends on jurisdiction and compliance requirements.
            </P>
            <Callout title="What the app stores say">
              <p>
                On the App Store, DogPay shows a 5.0 rating but from only 2 ratings, so treat that
                number as uninformative. On Google Play it has a 3.8 star rating from about 4,000
                reviews and 50,000+ downloads. Reviews are mixed: many users praise it for ad
                payments and subscriptions, while a few allege problems with deposits and
                withdrawals. As with any custodial fintech app, start small and test withdrawals
                before committing meaningful funds.
              </p>
            </Callout>
            <Figure
              src="/images/tools/dogpay/dogpay-app-store-listing.jpg"
              alt="DogPay listing on the Apple App Store showing a 5.0 star rating from 2 ratings and a 16 plus age rating"
              caption="App Store listing: 5.0 stars, but from only two ratings."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-google-play-listing.jpg"
              alt="DogPay listing on Google Play showing 3.8 stars from 4 thousand reviews and over 50 thousand downloads"
              caption="Google Play listing: 3.8 stars across roughly 4,000 reviews."
            />
          </Section>

          <Section id="cards">
            <H2>Cards: Visa and Mastercard, virtual and physical</H2>
            <P>
              DogPay issues both Visa and Mastercard cards, in virtual and physical form. You get a
              virtual card first and can use it for online spending immediately, then upgrade to a
              physical card later for in-store use. While the physical card is being processed, the
              virtual card keeps working without restrictions.
            </P>
            <P>
              There are two card styles. Budget Cards share one total balance across all your cards,
              so you never top up individual cards. Prepaid Cards keep an independent balance per
              card. Card issuance costs 10 USD per virtual card on the Basic plan.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-physical-card.jpg"
              alt="DogPay physical card application screen showing a green Visa physical card with options to create a virtual card or upgrade"
              caption="Physical card flow: start virtual, upgrade to physical when you need it."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-virtual-card-visa-america.jpg"
              alt="DogPay virtual card creation screen for a Visa Budget Card in the America region with a 10 USD card fee"
              caption="Virtual card setup: 10 USD issuance, Visa network, America region."
            />
            <H2>Card BIN regions: American, Singapore, and Global</H2>
            <P>
              DogPay offers cards from three BIN regions: American, Singapore, and Global. The BIN
              region affects where the card is recognized as issued from, which matters for
              merchants and platforms that treat cards differently by region. Each BIN has its own
              fee schedule, so check the fee table for your specific card before spending.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-virtual-card-singapore.jpg"
              alt="DogPay virtual card creation screen for a Visa Budget Card in the Singapore region with a 10 USD card fee"
              caption="Singapore BIN option: useful when you need an Asia-issued card."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-virtual-card-mastercard-prepaid.jpg"
              alt="DogPay virtual card creation screen for a Mastercard Prepaid Card in the America region with a 10 USD card fee"
              caption="Mastercard is also available for users who prefer it over Visa."
            />
          </Section>

          <Section id="fees">
            <H2>Fees: the real tables from inside the app</H2>
            <P>
              DogPay's fees come in two layers: the membership tier, which sets your card top-up
              fee and card limits, and the per-card transaction fee schedule, which depends on the
              card's BIN region and network. Here are the membership numbers captured in the app.
            </P>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-black text-slate-950">Membership</th>
                    <th className="px-4 py-3 font-black text-slate-950">Monthly price</th>
                    <th className="px-4 py-3 font-black text-slate-950">Max active cards</th>
                    <th className="px-4 py-3 font-black text-slate-950">Card top-up fee</th>
                    <th className="px-4 py-3 font-black text-slate-950">Bank account opening</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Free</td>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">1%</td>
                    <td className="px-4 py-3">Not shown</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Premium</td>
                    <td className="px-4 py-3">4.90 USD</td>
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">0.8%</td>
                    <td className="px-4 py-3">80 USD</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-bold text-slate-900">Platinum</td>
                    <td className="px-4 py-3">9.90 USD</td>
                    <td className="px-4 py-3">10</td>
                    <td className="px-4 py-3">0.5%</td>
                    <td className="px-4 py-3">50 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">Ultra</td>
                    <td className="px-4 py-3">29.80 USD</td>
                    <td className="px-4 py-3">20</td>
                    <td className="px-4 py-3">0.3%</td>
                    <td className="px-4 py-3">0 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              Memberships auto-renew monthly in USD and can be cancelled anytime. Upgrading takes
              effect immediately; downgrading takes effect after the current higher-tier period
              expires.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-membership-premium.jpg"
              alt="DogPay Member Center showing the Premium plan at 4.90 USD per month with 5 maximum active cards and 0.8 percent card top-up fee"
              caption="Premium tier: 4.90 USD per month, 5 cards, 0.8% top-up fee."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-membership-platinum.jpg"
              alt="DogPay Member Center showing the Platinum plan at 9.90 USD per month with 10 maximum active cards and 0.5 percent card top-up fee"
              caption="Platinum tier: 9.90 USD per month, 10 cards, 0.5% top-up fee."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-membership-ultra.jpg"
              alt="DogPay Member Center showing the Ultra plan at 29.80 USD per month with 20 maximum active cards and 0.3 percent card top-up fee"
              caption="Ultra tier: 29.80 USD per month, 20 cards, 0.3% top-up fee."
            />
            <P>
              Per-card transaction fees vary by BIN. For the American BIN Visa card shown in the
              app: US transactions cost 1.00% plus 0.5 USD, international transactions cost 1.50%
              plus 0.5 USD, refunds cost 2.00%, and there is no monthly fee with unlimited monthly
              spending. The Singapore BIN Visa card charges 0.50% plus 0.5 USD on US transactions
              and 1.50% plus 0.5 USD internationally. The Mastercard prepaid option we captured
              charges 0.00% plus 0 USD on transactions but a 1.00% deposit handling fee. Always
              check the fee table for your exact card in the app before spending, because BIN
              pricing changes.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-virtual-card-fees-america.jpg"
              alt="DogPay fee table for an American region Visa card showing 1 percent plus 0.5 USD US transaction fee and 1.5 percent plus 0.5 USD international fee"
              caption="American BIN fee table: check your exact card, BIN pricing varies."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-virtual-card-fees-singapore.jpg"
              alt="DogPay fee table for a Singapore region Visa card showing 0.5 percent plus 0.5 USD US transaction fee and 1.5 percent plus 0.5 USD international fee"
              caption="Singapore BIN fee table: lower US transaction fee than the American BIN."
            />
          </Section>

          <Section id="bank-account">
            <H2>USD bank account</H2>
            <P>
              DogPay can open a USD bank account for you inside the app, for sending and receiving
              dollars and managing funds. The account opening fee depends on your membership tier:
              80 USD on Premium, 50 USD on Platinum, and 0 USD on Ultra. The Basic tier screen we
              captured did not show a bank account opening option.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-bank-account.jpg"
              alt="DogPay Bank screen inviting users to open a USD bank account to send and receive money with an Open Account button"
              caption="The Bank tab opens a USD account for transfers in and out."
            />
          </Section>

          <Section id="deposits">
            <H2>Deposits: assets and networks</H2>
            <P>
              You fund DogPay with crypto. The app supports USDT, USDC, DOGE, BTC, SOL, and ETH,
              and for deposits you pick a network: Ethereum, Tron, Solana, Base, Arbitrum, BNB
              Smart Chain, or Polygon. Choose the network where your funds already sit. Sending
              USDT on Tron when your balance is on Ethereum means a bridge or swap you did not need.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-select-currency-crypto.jpg"
              alt="DogPay currency selection screen listing BTC, DOGE, ETH, SOL, USDC and USDT as deposit options"
              caption="Deposit assets: six cryptos to choose from."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-select-network.jpg"
              alt="DogPay network selection screen listing Ethereum, Tron, Solana, Base, Arbitrum, Binance Smart Chain and Polygon"
              caption="Deposit networks: seven chains supported for top-ups."
            />
          </Section>

          <Section id="kyc">
            <H2>KYC: required before cards</H2>
            <P>
              DogPay requires identity verification before it issues any card. The KYC screen
              explains it needs to verify your identity to protect account security and meet
              compliance requirements. You fill in basic information, submit ID documents, and
              complete facial recognition. The app says verification takes a few minutes. Until KYC
              is done, the Card tab shows that card issuance is unavailable.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-kyc-verification.jpg"
              alt="DogPay KYC verification screen with a Start Identity Verification button explaining ID document and facial recognition steps"
              caption="KYC is mandatory: no verification, no card."
            />
          </Section>

          <Section id="features">
            <H2>What else the app does</H2>
            <P>
              Beyond cards, DogPay packs in transfers, swaps, red packets (the social gifting
              feature popular in Asia), eSIM purchases, and a QR scanner. The Transfer tab offers
              Global Transfer with a currency calculator and Internal Transfer by UID or email for
              moving funds between DogPay users.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-transfer.jpg"
              alt="DogPay Transfer screen showing Global Transfer and Internal Transfer options with a USD to USD currency calculator"
              caption="Transfers: global transfers plus instant internal transfers by UID or email."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-internal-transfer.jpg"
              alt="DogPay internal transfer screen with UID and Email tabs and an input field for the recipient identifier"
              caption="Internal transfers move funds between DogPay users by UID or email."
            />
            <P>
              The supported apps screen is worth a look: 3D Secure, Google Pay, and Apple Pay are
              confirmed, and the app explicitly lists Amazon plus AI services (Anthropic API,
              Claude, OpenAI API, Midjourney) as supported. That makes DogPay a practical way to
              pay for subscriptions and API bills with crypto, which matches what many reviewers
              praise it for.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-supported-apps.jpg"
              alt="DogPay supported apps screen confirming 3DS, Google Pay, Apple Pay, Amazon, Anthropic API, Claude AI, Midjourney and OpenAI API compatibility"
              caption="Confirmed support: mobile wallets, 3DS, Amazon, and major AI APIs."
            />
            <Figure
              src="/images/tools/dogpay/dogpay-support-chat.jpg"
              alt="DogPay in-app support chat offering Messages, Help, Contact support, and guides for KYC certification and failed deposits"
              caption="In-app support with guides for KYC, deposits, and card issues."
            />
          </Section>

          <Section id="signup">
            <H2>How to sign up with our referral</H2>
            <P>
              1. Open our referral link: <a href={AFFILIATE} target="_blank" rel="sponsored noopener noreferrer" className="font-bold text-emerald-700 hover:text-emerald-900">go.cryptosbeginner.com/DogPay</a>. The
              referral code is {REF_CODE}. 2. Register with your email and download the DogPay app
              for iPhone or Android. 3. Complete KYC: basic info, ID document, and facial
              recognition. 4. Deposit crypto on the matching network (USDT on Tron is the cheapest
              common route). 5. Go to the Card tab and apply for a virtual card (10 USD issuance).
              Enter the referral ID in the app to enjoy card benefits.
            </P>
            <Figure
              src="/images/tools/dogpay/dogpay-referral-promo.jpg"
              alt="DogPay promotional graphic showing a green Visa Platinum card with referral ID 75490586 and a QR code to download the app"
              caption="Referral ID 75490586 unlocks card benefits when you sign up."
            />
            <div className="mt-6">
              <PrimaryAffiliateButton>Sign up for DogPay now</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="pros-cons">
            <H2>Pros and cons</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-black text-emerald-900">What stands out</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950/80">
                  <li>Both Visa and Mastercard, virtual and physical</li>
                  <li>Three BIN regions: American, Singapore, Global</li>
                  <li>Budget Cards share one balance, no per-card top-ups</li>
                  <li>USD bank account inside the app</li>
                  <li>Apple Pay, Google Pay, and 3DS confirmed</li>
                  <li>Works for AI API bills and Amazon</li>
                  <li>Seven deposit networks including Tron and Solana</li>
                  <li>Registered MSB in the US and Canada</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-black text-rose-900">What to watch</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-rose-950/80">
                  <li>10 USD virtual card issuance fee</li>
                  <li>Transaction fees stack per BIN and can be confusing</li>
                  <li>Membership needed for lower top-up fees</li>
                  <li>Bank account opening costs up to 80 USD on lower tiers</li>
                  <li>KYC mandatory, no card without it</li>
                  <li>Mixed app store reviews, some withdrawal complaints</li>
                  <li>Not available in Mainland China and restricted regions</li>
                  <li>Custodial: the app holds your funds</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="verdict">
            <H2>Verdict</H2>
            <P>
              DogPay is a practical crypto spending toolkit, not just a card. The combination of
              Visa and Mastercard options, three BIN regions, a USD bank account, and confirmed
              Apple Pay and Google Pay support covers most real-world spending needs. The standout
              use case is paying for things crypto does not normally reach: Amazon orders, AI API
              bills, and subscriptions, straight from stablecoins.
            </P>
            <P>
              The honest costs: 10 USD to issue a virtual card, per-transaction fees that vary by
              BIN, and a membership if you want lower top-up fees. The fee structure takes effort
              to understand, and the mixed app store reviews mean you should start small and test a
              withdrawal before trusting it with serious money. But for its niche, paying online
              services with crypto without a bank in the middle, it is one of the more complete
              options available.
            </P>
            <div className="mt-6">
              <PrimaryAffiliateButton>Get DogPay with referral code {REF_CODE}</PrimaryAffiliateButton>
            </div>
          </Section>

          <Section id="faq">
            <H2>Frequently asked questions</H2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-950 marker:hidden">
                    {item.question}
                    <span className="float-right text-emerald-600 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
