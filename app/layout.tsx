import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" })

export const metadata: Metadata = {
  title: "Future Front Excellence LLC | Industrial Automation Experts in Oman | خبراء الأتمتة الصناعية",
  description:
    "Leading provider of industrial automation solutions in Oman. Expert VFD, PLC, HMI repair, maintenance, and system integration services. مزود رائد لحلول الأتمتة الصناعية في سلطنة عمان",
  keywords:
    "industrial automation, VFD repair, PLC programming, HMI solutions, Oman, servo drives, system integration, الأتمتة الصناعية, عمان",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
