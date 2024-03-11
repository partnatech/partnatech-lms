import "./globals.css";
import { NextAuthProvider } from "../provider/auth";

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
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
