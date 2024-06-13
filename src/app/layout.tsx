import "./globals.css";
import type { Metadata } from "next";

import { ThemeProvider } from "@components/ThemeProvider";
import * as React from "react";
import { Header } from "@components/Header";

import { Josefin_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo app",
  description:
    "Todo application using Next.js, Tailwind CSS, and Zustand for state management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body
        className={
          "bg-lmVeryLightGray overflow-y-hidden bg-mobile-light bg-contain bg-no-repeat text-lmInactive transition-all dark:bg-dmVeryDarkBlue dark:bg-mobile-dark dark:text-dmMainText sm:bg-desktop-light sm:dark:bg-desktop-dark"
        }
      >
        <ThemeProvider>
          <main
            className={
              "mx-auto flex h-screen w-full flex-col px-5 py-10 sm:w-10/12 sm:px-0 sm:py-20 md:w-6/12 xl:w-4/12"
            }
          >
            <Header />
            {children}
            <div className="text-light-txt-4 dark:text-light-txt-2 mx-auto mt-9 w-fit text-center text-xs md:text-sm">
              Task Assessment Submitted by{" "}
              <a
                href="https://github.com/Muees99"
                className="text-dark dark:text-active-blue"
                target="_blank"
              >
                Muees99
              </a>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
