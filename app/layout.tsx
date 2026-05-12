import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chronilogix — Clinical-grade AI coaching for behavioral health and chronic care",
  description:
    "Chronilogix is the AI-native behavioral health and chronic care coaching platform built on Dr. Ken Resnicow's 30 years of Motivational Interviewing research — clinical-grade outcomes at a fraction of the cost of live care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
