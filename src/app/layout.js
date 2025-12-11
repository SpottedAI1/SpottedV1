import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // title: "SpottedAI",
  // description: "Find exactly who you're looking for, in seconds.",
  metadataBase: new URL("https://www.getspotted.live/"),
  title: "Spotted AI | Human-Guided AI Recruiting Platform",
  description:
    "Human-guided AI recruiting software that automates end-to-end sourcing, shortlisting and outreach to deliver interview-ready candidates for hiring teams.",
  openGraph: {
    type: "website",
    url: "https://www.getspotted.live/",
    siteName: "Spotted AI",
    title: "Spotted AI | Human-Guided AI Recruiting Platform",
    description:
      "Book interview-ready candidates faster with human-guided AI that automates sourcing, shortlisting, and personalized outreach end-to-end.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spotted AI OG Image",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
