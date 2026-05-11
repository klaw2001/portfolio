import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hrishikesh Netke — Software Developer | Mumbai",
  description:
    "Software Developer specializing in full-stack SaaS products, systems integrations, and production-ready web applications. Based in Mumbai, India.",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "SaaS Developer",
    "Web Developer",
    "Mumbai Developer",
  ],
  authors: [{ name: "Hrishikesh Netke" }],
  creator: "Hrishikesh Netke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hrishikeshnetke.in",
    title: "Hrishikesh Netke — Software Developer",
    description:
      "Software Developer specializing in full-stack SaaS products, systems integrations, and production-ready web applications.",
    siteName: "Hrishikesh Netke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrishikesh Netke — Software Developer",
    description:
      "Software Developer specializing in full-stack SaaS products, systems integrations, and production-ready web applications.",
    creator: "@hrishikeshnetke",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
