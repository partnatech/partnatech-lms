import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Navbar } from "./_components/navbar";

export default async function DashboardLayout() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div>
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
