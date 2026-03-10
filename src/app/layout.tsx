import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Befaro – AI-drevet rapportverktøy for takstmenn",
  description:
    "Skriv profesjonelle takstrapporter på minutter med Befaro. Slutt å knote med Word-maler.",
  keywords: ["takstrapport", "takstmann", "boligtaksering", "NS 3600", "AI", "Befaro"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Befaro – Spar timer på rapportskriving",
    description: "AI-drevet rapportverktøy bygget for norske takstmenn.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
