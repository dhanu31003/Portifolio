import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhanush | AI Engineer & Software Developer",
  description:
    "AI/ML Engineer & Full-Stack Developer building intelligent systems that solve real-world problems. Specializing in Generative AI, Computer Vision, XR, and production ML systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full-Stack Developer",
    "XR Developer",
    "Portfolio",
    "Dhanush",
  ],
  authors: [{ name: "Dhanush" }],
  openGraph: {
    title: "Dhanush | AI Engineer & Software Developer",
    description:
      "Building Intelligent Systems That Solve Real-World Problems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
