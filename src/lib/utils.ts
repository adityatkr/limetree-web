import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = "₹") {
  return `${currency}${price.toLocaleString("en-IN")}`;
}

export function truncate(text: string, length: number) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const WHATSAPP_NUMBER = "917479000111";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = "+91 74790 00111";
export const EMAIL = "reservation@limetreehotels.com";
export const HQ_ADDRESS = "Plot A-583, Near Huda City Centre, Sector 43, Gurugram, Haryana 122002";
