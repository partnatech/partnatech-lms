import { NavbarRoutes } from "@/components/navbar-routes";
import { authOptions } from "@/lib/auth";
import ThemeProvider from "@/provider/theme";
import { getServerSession } from "next-auth";
import React from "react";
import ChapterAccordion from "../_components/ChapterAccordion";
import ChapterTab from "../_components/ChapterTab";

const LearnDetailPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <ThemeProvider>
      <NavbarRoutes user={user} showSidebar={false} />
      <div className="lg:pr-[410px] dark:bg-gray-900 min-h-screen transition duration-150 ease-in-out">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video border rounded-md overflow-hidden bg-gray-100 border-gray-200 dark:border-gray-700 dark:bg-gray-800"></div>

            <ChapterTab />
          </div>
        </main>
      </div>
      <div className="hidden lg:fixed lg:right-0 lg:inset-y-0 lg:z-30 lg:flex lg:w-[410px] lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto dark:bg-gray-950 bg-gray-50 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h2>Yea</h2>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-4 overflow-y-auto">
              <li>
                <ChapterAccordion />
              </li>
              <li>
                <ChapterAccordion />
              </li>
              <li>
                <ChapterAccordion />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LearnDetailPage;
