import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}