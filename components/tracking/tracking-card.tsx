"use client";

import  { useMemo } from "react";
import { FileText } from "lucide-react";
import { TrackingHistoryCard } from "./tracking-history-card";
import { useFetchHMHistory } from "@/hooks/useFetchHMHistory";
import { mergeAndNormalizeEvents } from "@/lib/eventMerger";

interface TrackingCardProps {
  parcel: any;
  invoice: any;
}

export const TrackingCard = ({ parcel, invoice }: TrackingCardProps) => {
  const { data: hmHistory, isLoading: isLoadingHM } = useFetchHMHistory(
    parcel?.hbl
  );

  const mergedEvents = useMemo(() => {
    // Ensure we pass the bare events array if available, or the parcel itself depending on structure
    // mergeAndNormalizeEvents handles various inputs, passing parcel.events is usually safest if it exists
    const baseEvents = parcel?.events || parcel || [];
    return mergeAndNormalizeEvents(baseEvents, hmHistory || {});
  }, [parcel, hmHistory]);

  if (!parcel) return null;

  return (
    <div className="relative z-10 w-full shadow-lg ring-1 ring-border sm:rounded-3xl lg:flex-none">
      <div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(249,115,22,0)_0%,#f97316_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(249,115,22,0)_0%,#f97316_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(249,115,22,0)_0%,#f97316_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(249,115,22,0)_0%,#f97316_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
      </div>
      <div className="relative flex flex-col lg:flex-row items-center gap-6 bg-card px-4 py-10 sm:rounded-3xl sm:px-10">
        <div className="flex-1 w-full lg:w-auto">
          {invoice && (
            <>
              <div className="flex gap-2 lg:gap-0 items-center justify-between">
                <h1 className="text-xl my-6 font-semibold">{invoice?.agency}</h1>
                <span className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 border border-border bg-muted/50 text-foreground">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span aria-hidden="true">{invoice?.invoiceId}</span>
                  </span>
                </span>
              </div>
              <div className="text-sm text-muted-foreground my-2">
                {invoice?.province} - {invoice?.city}
              </div>
            </>
          )}
          
          <div className="my-4 flex items-center">
            <p className="text-[1.5rem] leading-none text-foreground">
              <span className="font-bold">{parcel?.hbl}</span>
            </p>
            <p className="ml-3 space-x-1 text-sm bg-muted px-2 py-1 rounded text-muted-foreground">
              <span className="font-semibold">HBL</span>
            </p>
          </div>
          <span className="text-muted-foreground mt-4 block">{parcel?.description}</span>
        </div>
        <div className="w-full lg:w-1/2">
             <TrackingHistoryCard events={mergedEvents} isLoading={isLoadingHM} />
        </div>
      </div>
    </div>
  );
};
