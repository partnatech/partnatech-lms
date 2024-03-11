"use client";
import { NavbarRoutes } from "@/components/navbar-routes";
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { MobileSidebar } from "./mobile-sidebar";
interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

interface NavbarProps {
  user?: User;
}

export const Navbar = ({ user }: NavbarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <NavbarRoutes user={user} setSidebarOpen={setSidebarOpen} />
      <Sidebar />
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};
