"use client"

import { useFetchByInvoiceOrHBL } from "@/hooks/useFetchByInvoiceOrHBL";
import { AlertCircle, Box } from "lucide-react";
import { TrackingCard } from "./tracking-card";

interface TrackingTimelineProps {
  id: string;
}

export function TrackingTimeline({ id }: TrackingTimelineProps) {
  const { 
    data: baseData, 
    isLoading, 
    isError 
  } = useFetchByInvoiceOrHBL(id);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground animate-pulse">Searching for package...</p>
      </div>
    );
  }

  if (isError || !baseData || (Array.isArray(baseData) && baseData.length === 0)) {
     return (
        <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
           <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500">
              <AlertCircle className="w-8 h-8" />
           </div>
           <h3 className="text-xl font-bold">Package not found</h3>
           <p className="text-muted-foreground max-w-sm mx-auto">
              We couldn't find any information for tracking number <strong>{id}</strong>. Please check the number and try again.
           </p>
        </div>
     )
  }

  // Normalize data to an array of parcels and an optional invoice object
  let parcels: any[] = [];
  let invoice: any = null;

  if (Array.isArray(baseData)) {
    // If it's an array, it might be a list of parcels (e.g. from an invoice query returning just the list)
    parcels = baseData;
  } else if (baseData.parcels && Array.isArray(baseData.parcels)) {
    // Structure: { parcels: [...], ...invoiceDetails }
    parcels = baseData.parcels;
    invoice = baseData; // The whole object acts as invoice info
  } else {
    // Single parcel object
    parcels = [baseData];
  }

  if (parcels.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
           <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
              <Box className="w-8 h-8" />
           </div>
           <h3 className="text-xl font-bold">No packages found</h3>
           <p className="text-muted-foreground max-w-sm mx-auto">
              We found the record but it contains no packages.
           </p>
        </div>
     )
  }

  return (
    <div className="space-y-8">
       {parcels.map((parcel: any, idx: number) => (
         <TrackingCard 
            key={parcel.id || parcel.hbl || idx} 
            parcel={parcel} 
            invoice={invoice} 
         />
       ))}
    </div>
  );
}

