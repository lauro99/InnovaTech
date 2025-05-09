import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} bg-white text-[#000052] min-h-screen flex flex-col`}
    >
      {children}
    </div>
  );
}
