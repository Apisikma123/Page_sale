// Anti-Bot Obfuscation:
// Numbers are encoded into byte sequences and reconstructed only at runtime in browser memory.
// Prevents static HTML scrapers, regex harvesters, and spam crawlers from reading phone numbers.

const P_BYTES = [54, 50, 56, 57, 53, 48, 51, 51, 56, 54, 51, 50, 49]; // 6289503386321
const S_BYTES = [54, 50, 56, 53, 49, 54, 57, 48, 56, 52, 49, 51, 54]; // 6285169084136

const P_DISP_BYTES = [43, 54, 50, 32, 56, 57, 53, 45, 48, 51, 51, 56, 45, 54, 51, 50, 49]; // +62 895-0338-6321
const S_DISP_BYTES = [43, 54, 50, 32, 56, 53, 49, 45, 54, 57, 48, 56, 45, 52, 49, 51, 54]; // +62 851-6908-4136

function decodeBytes(arr: number[]): string {
  return String.fromCharCode(...arr);
}

export function getSafeNumber(type: "primary" | "secondary" = "primary"): string {
  return decodeBytes(type === "primary" ? P_BYTES : S_BYTES);
}

export function getSafeDisplay(type: "primary" | "secondary" = "primary"): string {
  return decodeBytes(type === "primary" ? P_DISP_BYTES : S_DISP_BYTES);
}

export function getSafeWaUrl(
  type: "primary" | "secondary" = "primary",
  message?: string
): string {
  const num = getSafeNumber(type);
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${num}${text}`;
}
