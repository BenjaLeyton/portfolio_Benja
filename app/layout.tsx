// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const urbanist = Urbanist({ subsets: ["latin"] });

// ----------- SEO / Open-Graph -----------
export const metadata: Metadata = {
  title: "Benjamin Leyton",
  description: "Landing Page by Benjamin Leyton",
};

// ----------- viewport mobile-first -----------
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <-- aquí suprimimos cualquier warning de hidratación en <html>
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${urbanist.className} antialiased scroll-smooth min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
