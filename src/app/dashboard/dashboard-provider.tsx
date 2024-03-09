"use client";

import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

const DashboardProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default DashboardProvider;
