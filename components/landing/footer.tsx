"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram, Send } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border text-foreground pt-20 pb-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Contact - Spans 2 cols on large screens */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2">
               <div className="relative h-8 w-8 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
                <Image
                  src="/logo.jpg"
                  alt="TramiXpress Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold">TramiXpress</span>
            </Link>
            
            <p className="text-muted-foreground max-w-xs">
              {t.footer.about}
            </p>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>{t.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>{t.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>{t.contact.address}</span>
              </div>
            </div>

          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.product}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">{t.footer.links.features}</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">{t.footer.links.pricing}</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-1">
             <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.company}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">{t.footer.links.about}</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">{t.footer.links.contact}</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="lg:col-span-1">
             <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.resources}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
            </ul>
          </div>

           {/* Column 5: Legal */}
           <div className="lg:col-span-1">
             <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.legal}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">{t.footer.links.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">{t.footer.links.terms}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Made by Valelee LLC with ❤️. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          
           <div className="flex gap-6 text-sm text-muted-foreground md:hidden">
              <Link href="#" className="hover:text-foreground">{t.footer.links.privacy}</Link>
              <Link href="#" className="hover:text-foreground">{t.footer.links.terms}</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
