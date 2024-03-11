import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Navbar } from "./_components/navbar";
import { PropsWithChildren } from "react";
import ThemeProvider from "@/provider/theme";

export default async function BootcampLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <ThemeProvider>
      <Navbar user={user} />
      <div className="lg:pl-72 dark:bg-gray-900 min-h-screen transition duration-150 ease-in-out">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
}
