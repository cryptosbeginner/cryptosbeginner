export interface FeaturedTrader {
  label: string;
  address: string;
  chain: "Solana" | "Ethereum";
  rank: number;
  xUrl: string;
  sourceNote: string;
  addedAt: string;
}

// Featured meme coin traders, sourced from KOLlector's public "most searched"
// ranking (last 7 days) as of 8 October 2026.
//
// Sourcing policy: each wallet below is listed on KOLlector's public directory,
// which derives the X-handle-to-wallet association from the trader's pump.fun or
// fomo profile stating that X handle. The exact verification wording shown on
// KOLlector is recorded in sourceNote, with a link to the profile in sourceUrl.
//
// This is a third-party directory listing, not our independent verification.
// Inclusion is not an endorsement, and a wallet can change hands, be shared,
// or be one of several a trader uses. Always verify against the trader's own
// current channels before acting on any association.
const ADDED_AT = "2026-10-08";

export const featuredTraders: FeaturedTrader[] = [
  {
    label: "@frankdegods",
    address: "0x696d1265c8fc4f14797abebfae3c43ebfa9d8e28",
    chain: "Ethereum",
    rank: 1,
    xUrl: "https://x.com/frankdegods",
    sourceNote: "fomo profile states @frankdegods",
    addedAt: ADDED_AT,
  },
  {
    label: "@ansemconzimp",
    address: "GV6UUmNxz2RpKxmNAPadYKb7uQpszwqQAu3qLJxVdC52",
    chain: "Solana",
    rank: 2,
    xUrl: "https://x.com/ansemconzimp",
    sourceNote: "pump.fun profile links @blknoiz06 on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@ansemconzimp",
    address: "0xb2b7e6563c2eba9113979aa04ad1b77313701a8c",
    chain: "Ethereum",
    rank: 2,
    xUrl: "https://x.com/ansemconzimp",
    sourceNote: "pump.fun profile links @blknoiz06 on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@unipcs",
    address: "2heJbC32Tpfcb3nbUb5ER61K11FGZVfVGtVnDm6LDogF",
    chain: "Solana",
    rank: 3,
    xUrl: "https://x.com/unipcs",
    sourceNote: "fomo profile states @unipcs",
    addedAt: ADDED_AT,
  },
  {
    label: "@unipcs",
    address: "0x0a6ebed0155edb4b21d92ad02897a626cd90119e",
    chain: "Ethereum",
    rank: 3,
    xUrl: "https://x.com/unipcs",
    sourceNote: "fomo profile states @unipcs",
    addedAt: ADDED_AT,
  },
  {
    label: "@cupsey",
    address: "6DQAGJT7VZPVBsuG4kn3AvpyHCEi7B2RFFvMZdbqQqqP",
    chain: "Solana",
    rank: 4,
    xUrl: "https://x.com/cupsey",
    sourceNote: "pump.fun profile links @Cupseyy on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@cupsey",
    address: "0x117c027ca46f55a896431f255cde0f08536a32f5",
    chain: "Ethereum",
    rank: 4,
    xUrl: "https://x.com/cupsey",
    sourceNote: "pump.fun profile links @Cupseyy on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@cooker",
    address: "8deJ9xeUvXSJwicYptA9mHsU2rN2pDx37KWzkDkEXhU6",
    chain: "Solana",
    rank: 5,
    xUrl: "https://x.com/cooker",
    sourceNote: "pump.fun profile links @CookerFlips on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@cooker",
    address: "0xb86f49b6387386badc4d74a217faa3273ad36c03",
    chain: "Ethereum",
    rank: 5,
    xUrl: "https://x.com/cooker",
    sourceNote: "pump.fun profile links @CookerFlips on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@rasmr",
    address: "DtjZR9SdxUKbMyu4qeUVgjMJyGDhYg76BttXxfhf3z59",
    chain: "Solana",
    rank: 6,
    xUrl: "https://x.com/rasmr",
    sourceNote: "pump.fun profile links @rasmr directly",
    addedAt: ADDED_AT,
  },
  {
    label: "@cented69420",
    address: "CyaE1VxvBrahnPWkqm5VsdCvyS2QmNht2UFrKJHga54o",
    chain: "Solana",
    rank: 7,
    xUrl: "https://x.com/cented69420",
    sourceNote: "pump.fun profile links @Cented7 on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@cented69420",
    address: "0x0946a8df66500016d7411d3b18d93d3d9bf7fde7",
    chain: "Ethereum",
    rank: 7,
    xUrl: "https://x.com/cented69420",
    sourceNote: "pump.fun profile links @Cented7 on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@rowdy",
    address: "FzpSqJeJRSBxrySAE34vjyB5VQeVVg5tMMrnxrCu9ffj",
    chain: "Solana",
    rank: 8,
    xUrl: "https://x.com/rowdy",
    sourceNote: "pump.fun profile links @RowdyCrypto on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@rowdy",
    address: "0x672136604b49b0135b46582fc9601fe82d077baa",
    chain: "Ethereum",
    rank: 8,
    xUrl: "https://x.com/rowdy",
    sourceNote: "pump.fun profile links @RowdyCrypto on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@rowdy",
    address: "0x03ba951f72e59899ac8dab30cb5624dbe5d52bb8",
    chain: "Ethereum",
    rank: 8,
    xUrl: "https://x.com/rowdy",
    sourceNote: "fomo profile states @Rowdy",
    addedAt: ADDED_AT,
  },
  {
    label: "@badattrading",
    address: "GZ1yiJKTq8Mc6RiY2WQrzph8wJcizSLGgyhr4RSgnuUo",
    chain: "Solana",
    rank: 9,
    xUrl: "https://x.com/badattrading",
    sourceNote: "pump.fun profile links @badattrading_ on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@badattrading",
    address: "0x9ea4395f2217bd3c360f70b9a46b630b6046847f",
    chain: "Ethereum",
    rank: 9,
    xUrl: "https://x.com/badattrading",
    sourceNote: "pump.fun profile links @badattrading_ on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@slingoor",
    address: "5YRgrP3mjGzrzirYYN5HAQH19cTYREYwGxW6XRJQUzij",
    chain: "Solana",
    rank: 10,
    xUrl: "https://x.com/slingoor",
    sourceNote: "pump.fun profile links @slingoorio on X",
    addedAt: ADDED_AT,
  },
  {
    label: "@slingoor",
    address: "0x17e9d5945dcea0e5f51e9915b78e3be71ee0731b",
    chain: "Ethereum",
    rank: 10,
    xUrl: "https://x.com/slingoor",
    sourceNote: "pump.fun profile links @slingoorio on X",
    addedAt: ADDED_AT,
  },
];

export const suggestTraderEmail = "admin@cryptosbeginner.com";

export const directorySourceNote =
  "KOLlector most-searched ranking, last 7 days, as of 8 October 2026";
