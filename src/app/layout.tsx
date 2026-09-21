import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hind = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ডাঃ মোঃ আরিফ মাসুদ চৌধুরী | মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ",
  description:
    "দেশ ও বিদেশে ১০ বছরের অভিজ্ঞতা সম্পন্ন মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ। এমবিবিএস, সিসিডি (বারডেম), পিজিটি-সার্জারি। বিএমডিসি নিবন্ধন: ৭৩৫৩১।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${hind.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-navy">{children}</body>
    </html>
  );
}
