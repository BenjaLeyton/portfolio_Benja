import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benjamin Leyton",
  description: "Landing Page by Benjamin Leyton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
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
