import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono"
});

export const metadata: Metadata = {
    title: "Kingsley Ahams | Portfolio",
    description: "Final Year Student & Software Builder",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a]`}>
        <Navbar />

        <main
            id="main-content"
            className="transition-transform duration-300 ease-in-out relative z-10"
        >
            {children}
        </main>

        <Analytics />
        </body>
        </html>
    );
}