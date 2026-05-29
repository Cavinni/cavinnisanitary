import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "CAVINNI — Contemporary Sanitary Collection",
  description:
    "CAVINNI menghadirkan koleksi sanitary premium dengan desain modern dan arsitektural untuk rumah kontemporer Indonesia. Shower system, kran wastafel, bathroom accessories, dan lebih banyak lagi.",
  keywords: "cavinni, sanitary, shower system, kran, bathroom accessories, wastafel, faucet, indonesia",
  openGraph: {
    title: "CAVINNI — Contemporary Sanitary Collection",
    description:
      "Modern sanitary solutions crafted for contemporary Indonesian homes.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
