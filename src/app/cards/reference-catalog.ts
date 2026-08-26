export type ReferenceSource = "CryptoCardHub" | "Todey";

export type ReferenceCard = {
  slug: string;
  name: string;
  network: string;
  source: ReferenceSource;
  sourceUrl: string;
};

const sourceUrls: Record<ReferenceSource, string> = {
  CryptoCardHub: "https://www.cryptocardhub.com/cards",
  Todey: "https://www.todey.xyz/cards/",
};

const cryptoCardHubRows = `
1inch Card|Mastercard
Airtm Card|Visa
AIX Pay Card|Visa
Amp Pay Card|Visa
Avalanche Card|Visa
Avici Card|Visa
BasedApp Card|Visa
Binance Card|Mastercard
Binance Visa Card|Visa
Bing Card|Visa / Mastercard
Bit Store Card|Mastercard / Visa
Bit2Me Card|Mastercard
Bitget Wallet Card|Visa / Mastercard
BitMart Card|Visa
Bitpanda Card|Visa
BitPay Card|Mastercard
Bitrefill Card|Visa
Bitsa Card|Visa
Bitwala Card|Visa
Blackcat Card|Mastercard
Bleap Card|Mastercard
Brighty Card|Mastercard
Bybit Card|Mastercard / Visa
CEX.IO Card|Mastercard
COCA Card|Visa / Mastercard
Coinbase Card|Visa / Amex
CoinJar Card|Mastercard
CoinZoom Card|Visa
Crydit Card|Visa / Mastercard
Crypto.com Card|Visa / Mastercard
Cypher Card|Visa
Deblock Card|Visa
Decaf Card|Visa
ether.fi Cash Card|Visa
Exa Card|Visa
Exworth Card|Mastercard
FG Card|Not stated
Fiat24 Card|Mastercard
FNT Crypto Card|Mastercard
Fold Card|Visa
Fuse Card|Visa
Gate Card|Visa
Gemini Credit Card|Mastercard
Girin Card|Visa
Gnosis Pay Card|Visa
Holyheld Card|Mastercard
Hyperbeat Card|Visa
Ka. Debit Card|Visa
Kardpay Card|Mastercard / Visa
KAST Card|Visa
Kazepay Card|Mastercard / Visa
KemyCard|Visa / Mastercard
Keytom Card|Visa
Kite Stable Card|Visa
Kolo Card|Visa
Krak Card|Mastercard
Kripi Card|Visa / Mastercard
KuCard|Mastercard
Laso Card|Visa
Ledger CL Card|Visa
Lemon Card|Visa
LinkPay Card|Visa / Mastercard
Mercuryo Spend Card|Mastercard
Metamask Card|Mastercard
MEXC Card|Visa
Mobilum Card|Mastercard
Morph Card|Mastercard
Nexo Card|Mastercard
nsave Card|Mastercard
OKX Card|Mastercard / Visa
Oobit Card|Visa
Osmosis Pay Card|Visa
PayWide Card|Visa / Mastercard
PAYY Card|Visa
Pera Card (Algorand)|Mastercard
Phantom Cash Card|Visa
Pintopay Card|Visa / Mastercard
PlasBit Card|Visa
Plasma One Card|Visa
Ready Card|Mastercard
RedotPay Card|Visa
Revolut Crypto Card|Visa / Mastercard
Ripio Card|Visa
Rizon Card|Visa
SafePal Card|Mastercard
Shakepay Card|Visa
Simple.app Card|Mastercard
Solayer Pay Card|Visa
SolCard|Visa
Spritz Card|Visa
Stealths Card|Visa / Mastercard / Amex / Gift Card
Stella Card|Visa
SwissBorg Card|Mastercard
Swissquote Debit Mastercard|Mastercard
Swype.fun Card|Visa
Tangem Pay Card|Visa
THORWallet Card|Mastercard
Tria Card|Visa
Trocador Card|Visa / Mastercard
Trustee Card|Visa
Tuyo Card|Visa
UGLYCASH Card|Visa
Uphold Card|Visa / Mastercard
UR Card|Mastercard
Utorg Card|Visa
Volet Card|Visa / Mastercard
Western Union Stablecard|Visa
WhiteBIT Nova Card|Visa
Winity Life Card|Visa
Wirex Card|Visa / Mastercard
Wirex One Card|Mastercard / Visa
Xapo Bank Card|Visa / Mastercard
Xhype Card|Visa / Mastercard
XPlace Card|Visa
xPortal Card|Mastercard
Zebec Card|Mastercard
ZEN Card|Mastercard / Visa
Zypto Card|Visa / Mastercard
`;

const todeyRows = `
WaveCard|Visa
KardPay Card|Not stated
Girin Card|Visa
Wallbit Card|Not stated
Gluon Card|Not stated
Interlace Infinity Card|B2B card
Winity Card|Not stated
OppiWallet Card|Visa / Mastercard
Kripi Card|Visa / Mastercard
Startale Card|Not stated
MPChat Card|Visa
Kite Card|Not stated
Hyperbeat Card|Visa
DeFi.com Card|Not stated
Stack Card|Not stated
Kolan Card|Credit card
Lumo Debit Card|Not stated
Western Union StableCard|Not stated
Tevau Card|Not stated
Brave Rewards Card|Not stated
Privacy Gateway Card|Not stated
Peanut Card|Visa
Veera Card|Not stated
Keyflo Card|Not stated
Fasqon Card|Not stated
Mine Card|Not stated
Cashi Card|Not stated
Pulsar Card|Not stated
Bringin Card|Not stated
Paybis Card|Not stated
Hevn Card|Corporate card
Lydian Card|Visa Platinum
Jam Card|Not stated
Reah Card|Not stated
Wirex One Card|Visa / Mastercard
Grey Card|Not stated
Endl Card|Not stated
MXI Card|Not stated
Bipa Card|Not stated
Firma Card|Not stated
`;

function slugify(name: string, source: ReferenceSource) {
  return `${source.toLowerCase()}-${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

function parseRows(raw: string, source: ReferenceSource): ReferenceCard[] {
  return raw
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((row) => {
      const [name, network] = row.split("|");
      return {
        slug: slugify(name, source),
        name,
        network,
        source,
        sourceUrl: sourceUrls[source],
      };
    });
}

export const referenceCardIndex: ReferenceCard[] = [
  ...parseRows(cryptoCardHubRows, "CryptoCardHub"),
  ...parseRows(todeyRows, "Todey"),
];
