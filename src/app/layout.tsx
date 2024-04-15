import { Inter } from 'next/font/google';
import "./globals.css";
import { NextAuthProvider } from "../provider/auth";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Partnatech LMS",
  description: "Kelas online Data Engineer dan Analytics Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
