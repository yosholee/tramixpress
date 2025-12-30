"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border">
             <Image
              src="/logo.jpg"
              alt="TramiXpress Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight">TramiXpress</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">
            {t.navbar.features}
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">
            {t.navbar.howItWorks}
          </Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">
            {t.navbar.testimonials}
          </Link>
          <Link href="#faq" className="hover:text-primary transition-colors">
             {t.navbar.faq}
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" className="hidden sm:flex">
             {t.navbar.login}
          </Button>
          <Button>{t.navbar.getStarted}</Button>
        </div>
      </div>
    </nav>
  );
}
