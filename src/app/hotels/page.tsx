import type { Metadata } from "next";
import HotelsClient from "./HotelsClient";

export const metadata: Metadata = {
  title: "Hotels | Browse Premium Hotels Across India",
  description:
    "Search and book premium hotels across Delhi, Gurgaon, Jaipur, Mumbai, Hyderabad, and Bangalore. Best rates guaranteed. Free cancellation available.",
};

export default async function HotelsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  return <HotelsClient searchParams={params} />;
}
