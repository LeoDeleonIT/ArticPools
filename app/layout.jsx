import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import BubbleIntro from "@/components/BubbleIntro";

export const metadata = {
  title: "Arctic Pool & Spa Services | Crystal Clear Pools, Every Time",
  description:
    "Premier pool cleaning, maintenance, equipment repair, and spa services in Southwest Florida. Licensed, insured, and on-time — every visit.",
  metadataBase: new URL("https://arcticpools.org"),
  openGraph: {
    title: "Arctic Pool & Spa Services",
    description:
      "Crystal clear pools. Reliable service. Every time. Call (239) 378-0640.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Premium display font for headings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#04111e" />
      </head>
      <body className="bg-ink text-frost antialiased overflow-x-hidden">
        {/* Premium intro: bubbles + glass reveal */}
        <BubbleIntro />

        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  );
}
