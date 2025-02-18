import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { SignInModal } from "@/components/sign-in-modal"

export const metadata: Metadata = {
  title: "MediSage - Medical Data Analysis",
  description: "Advanced medical data analysis and healthcare integration platform",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="flex items-center justify-between px-20 py-6 border-b fixed w-full bg-background/95 backdrop-blur-sm z-50">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0294.PNG-DhpAnTUAelAI71IjolkqKoahr8M2UK.png"
                alt="MediSage Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                priority
              />
              <span className="text-2xl font-bold">MediSage</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-12">
              <Link
                href="/services"
                className="text-base font-medium text-muted-foreground hover:text-medisage-blue transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about-us"
                className="text-base font-medium text-muted-foreground hover:text-medisage-blue transition-colors"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-muted-foreground hover:text-medisage-blue transition-colors"
              >
                Contact
              </Link>
            </nav>
            <SignInModal />
          </header>
          <main className="flex-1 pt-24">{children}</main>
          <footer className="border-t">
            <div className="max-w-[1440px] mx-auto px-20 py-8 flex justify-between items-center">
              <div className="text-base text-muted-foreground">© 2024 MediSage. All rights reserved.</div>
              <div className="flex space-x-8">
                <Link
                  href="/privacy"
                  className="text-base text-muted-foreground hover:text-medisage-blue transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-base text-muted-foreground hover:text-medisage-blue transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"

import "./globals.css"



import './globals.css'