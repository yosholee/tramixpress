"use client"

import { Hero } from "@/components/landing/hero";
import { useLanguage } from "@/components/language-provider";
import { TrackingTimeline } from "@/components/tracking/tracking-timeline";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { useParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingPage() {
  const { t } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === "string" ? decodeURIComponent(params.id) : "";
  const [searchValue, setSearchValue] = useState(id);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/tracking/${encodeURIComponent(searchValue.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
       <Navbar /> {/* Reusing landing navbar */}
       
       <main className="flex-1 pb-24">
         {/* Simple Header */}
         <div className="bg-muted py-12 md:py-20 border-b border-border">
            <div className="container px-4 mx-auto text-center space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Track your Shipment
                </h1>
                <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2">
                   <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="pl-10 h-12 bg-background font-medium" 
                        placeholder="Enter Tracking ID or HBL..." 
                      />
                   </div>
                   <Button type="submit" size="lg" className="h-12 px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold">
                      Track
                   </Button>
                </form>
            </div>
         </div>

         {/* Timeline Content */}
         <div className="container px-4 mx-auto -mt-8 relative z-10 max-w-3xl">
            <TrackingTimeline id={id} />
         </div>
       </main>

       <Footer />
    </div>
  );
}
