import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

// const navigation = [
//   { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
//   { name: "Team", href: "#", icon: UsersIcon, current: false },
//   { name: "Projects", href: "#", icon: FolderIcon, current: false },
//   { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
//   { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
//   { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
// ];

// const sidebarProps = {
//   navigation,
// };

export default async function DashboardLayout() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div>
      <Sidebar  />
      <Navbar user={user} />
      <div>
        <div className="lg:pl-72">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8"></div>
          </main>
        </div>
      </div>
    </div>
  );
}
