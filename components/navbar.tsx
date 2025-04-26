"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"

const programsItems = [
  { title: "Weekend School", href: "/programs/weekend-school" },
  { title: "Full-Time School", href: "/programs/full-time-school" },
  { title: "Summer Camp", href: "/programs/summer-camp" },
  { title: "Youth Programs", href: "/programs/youth-programs" },
  { title: "Adult Education", href: "/programs/adult-education" },
]

const scheduleItems = [
  { title: "Prayer Times", href: "/schedule/prayer-times" },
  { title: "Weekend School", href: "/schedule/weekend-school" },
  { title: "Full-Time School", href: "/schedule/full-time-school" },
  { title: "Special Events", href: "/schedule/special-events" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">ISCJ</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" className="ml-auto md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>ABOUT</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>PROGRAMS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {programsItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>CLASS SCHEDULE</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {scheduleItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/registration" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>REGISTRATION</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>CONTACT</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top md:hidden bg-background">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-lg font-medium py-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>

              <div className="py-2 border-b">
                <div className="text-lg font-medium mb-2">PROGRAMS</div>
                <div className="pl-4 flex flex-col space-y-2">
                  {programsItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b">
                <div className="text-lg font-medium mb-2">CLASS SCHEDULE</div>
                <div className="pl-4 flex flex-col space-y-2">
                  {scheduleItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/registration"
                className="text-lg font-medium py-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                REGISTRATION
              </Link>

              <Link
                href="/contact"
                className="text-lg font-medium py-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
