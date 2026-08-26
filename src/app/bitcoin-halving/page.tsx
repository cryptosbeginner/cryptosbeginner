import { permanentRedirect } from "next/navigation";

export default function LegacyBitcoinHalvingPage() {
  permanentRedirect("/tools/bitcoin-halving");
}
