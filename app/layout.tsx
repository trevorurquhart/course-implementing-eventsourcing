import type {Metadata} from "next";
import localFont from "next/font/local";
import React from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Nebulit - Accelerate Toolkit",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
        <head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"

            />
            <link
                rel="stylesheet"
                href="/prototype.css"
            />
            <link
                rel="stylesheet"
                href="/globals.css"
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>

        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <footer className="footer has-background-light">
            <div className="container">


                {/* Bottom copyright */}
                <div className="content has-text-centered">
                    <p>This is the sample application of the Online Course <a
                        href={"https://www.eventsourcingcourse.com"}>Implementing Eventsourcing</a></p>
                    <p>&copy; {new Date().getFullYear()} <strong><a href={"https://www.nebulit.de"}>Nebulit
                        GmbH</a></strong>. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
