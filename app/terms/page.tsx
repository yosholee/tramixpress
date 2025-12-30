"use client"

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { useLanguage } from "@/components/language-provider";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  const { t } = useLanguage();
  const terms = t.terms;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container px-4 md:px-6 mx-auto py-24 max-w-4xl">
        <div className="mb-8">
            <Link href="/">
                <Button variant="ghost" className="pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Button>
            </Link>
        </div>

        <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {terms.title}
            </h1>
            <p className="text-muted-foreground">
                {terms.lastUpdated}
            </p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.intro.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.intro.content}</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.services.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.services.content}</p>
            </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.rates.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.rates.content}</p>
            </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.prohibited.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.prohibited.content}</p>
            </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.tracking.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.tracking.content}</p>
            </section>
            
             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.insurance.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.insurance.content}</p>
            </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.claims.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.claims.content}</p>
            </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.privacy.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.privacy.content}</p>
            </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.modifications.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.modifications.content}</p>
            </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">{terms.law.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.law.content}</p>
            </section>

             <section className="bg-muted/50 p-6 rounded-xl space-y-4 border border-border">
                <h2 className="text-2xl font-bold">{terms.contactSection.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{terms.contactSection.content}</p>
                <div className="space-y-1 font-medium text-foreground">
                    <p>{terms.contactSection.address}</p>
                    <p>{terms.contactSection.phone}</p>
                    <p>{terms.contactSection.email}</p>
                </div>
            </section>
        </div>

      </div>
      <Footer />
    </main>
  );
}
