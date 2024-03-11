"use client";

import React, { PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
