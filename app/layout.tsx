import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Islamic Society of Central Jersey",
  description: "Serving the Muslim community through education, worship, and community service",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <footer className="border-t py-8 mt-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Islamic Society of Central Jersey</h3>
                  <p className="text-muted-foreground">
                    4145 US Highway 1 South
                    <br />
                    Monmouth Junction, NJ 08852
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Contact</h3>
                  <p className="text-muted-foreground">
                    Phone: (732) 329-4750
                    <br />
                    Email: info@iscj.org
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Hours</h3>
                  <p className="text-muted-foreground">
                    Office Hours:
                    <br />
                    Monday - Friday: 10:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Islamic Society of Central Jersey. All rights reserved.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
