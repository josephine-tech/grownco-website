import type { Metadata } from "next";
import AboutDetail from "./AboutDetail";

export const metadata: Metadata = {
  title: "About",
  description:
    "Grow N Co is a global performance marketing agency founded on a single belief: that world-class marketing should be accessible to brands everywhere.",
};

export default function AboutPage() {
  return <AboutDetail />;
}
