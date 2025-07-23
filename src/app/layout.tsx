import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import SplashCursor , {ColorRGB} from '@/components/cursor/cursor';

const font = Funnel_Display({
  variable: "--font-funal-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio created by Manikandan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`w-dvw h-dvh ${font.className} antialiased`}
      >
        {/* <SplashCursor/> */}
        {children}
      </body>
    </html>
  );
}
