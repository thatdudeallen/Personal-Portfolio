import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Allen - Personal Portfolio",
  description:
    "Tatenda Allen Chisvo - Web Developer, Graphic Designer, Filmmaker & Photographer. Creating stunning digital experiences with creativity and technical expertise.",
  keywords: [
    "Web Developer",
    "Graphic Designer",
    "Filmmaker",
    "Photographer",
    "Portfolio",
    "Allen Chisvo",
    "South Africa",
  ],
  authors: [{ name: "Tatenda Allen Chisvo" }],
  openGraph: {
    title: "Allen - Personal Portfolio",
    description:
      "Web Developer, Graphic Designer, Filmmaker & Photographer creating stunning digital experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
