import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://cjbelo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CJ Belo - Senior Full Stack Engineer",
    template: "%s - CJ Belo",
  },
  description:
    "Senior Full Stack Software Engineer with 16+ years of experience building scalable applications, SaaS platforms, and intuitive user experiences.",
  keywords: [
    "Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "AWS",
    "AI Engineer",
    "Senior Engineer",
    "CJ Belo",
  ],
  authors: [{ name: "CJ Belo" }],
  creator: "CJ Belo",
  openGraph: {
    title: "CJ Belo - Senior Full Stack Engineer",
    description:
      "Senior Full Stack Software Engineer with 16+ years of experience building scalable web applications, SaaS platforms, and cloud-based systems.",
    type: "website",
    locale: "en_US",
    siteName: "CJ Belo",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CJ Belo - Senior Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CJ Belo - Senior Full Stack Engineer",
    description:
      "Senior Full Stack Software Engineer with 16+ years of experience building scalable web applications, SaaS platforms, and cloud-based systems.",
    creator: "@cjbelo",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
