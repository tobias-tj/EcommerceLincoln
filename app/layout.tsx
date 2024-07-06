import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import Head from "next/head";
import NextTopLoader from 'nextjs-toploader';


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lincoln Clone",
  description: "Clone from TJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta
        http-equiv="Content-Security-Policy"
        content="style-src 'self' https://fonts.googleapis.com https://apis.google.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com;"
      />

      </Head>
      <body className={urbanist.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              color="#FFEB3B"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #FFEB3B, 0 0 5px #FFEB3B"
            />
            <Navbar />
            {children}
            <Toaster />
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
