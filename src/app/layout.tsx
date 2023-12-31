import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import RootWrapper from "./rootWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: string }) {
    console.log(params)
    return (
        <html lang="en">
            <body className={inter.className}>
                <RootWrapper>{children}</RootWrapper>
            </body>
        </html>
    )
}
