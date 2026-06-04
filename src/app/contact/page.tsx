import type { Metadata } from "next";
import ContactDetail from "./ContactDetail";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free strategy call with Grow N Co. We work with brands and creators across Africa, Europe, and the Americas.",
};

export default function ContactPage() {
  return <ContactDetail />;
}
