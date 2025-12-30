"use client";

import { format, parseISO } from "date-fns";
import { Check, Truck } from "lucide-react";

interface TrackingEvent {
  timestamp: string | null;
  statusCode: string;
  statusName: string;
  statusDescription?: string | null;
  location?: string | null;
  locationId?: string | number | null;
}

interface TrackingHistoryCardProps {
  events: TrackingEvent[];
  isLoading?: boolean;
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-4">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
    <span className="ml-2 text-sm text-muted-foreground">Cargando historial...</span>
  </div>
);

const getEventIcon = (statusCode: string) => {
  if (statusCode === "DELIVERED") {
    return <Truck className="w-6 h-6 text-green-500" />;
  }
  return <Check className="w-6 h-6 text-orange-500" />;
};

const formatEventDate = (timestamp: string | null) => {
  if (!timestamp || timestamp === "0000-00-00") return "";

  try {
    const date = parseISO(timestamp);
    if (isNaN(date.getTime())) return "";
    return format(date, "MMM d, yyyy HH:mm");
  } catch {
    return "";
  }
};

export const TrackingHistoryCard = ({ events, isLoading }: TrackingHistoryCardProps) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-sm text-muted-foreground py-4">
        No hay eventos disponibles
      </div>
    );
  }

  return (
    <ul className="space-y-8 lg:border-l border-border pl-4 text-sm leading-6 text-foreground">
      {[...events].reverse().map((event, index) => (
        <li key={`${event.timestamp}-${index}`} className="flex items-start">
          <div className="flex-shrink-0">
             {getEventIcon(event.statusCode)}
          </div>
          <div className="ml-5 flex flex-col">
            <strong
              className={`flex font-semibold gap-2 ${
                event.statusCode === "DELIVERED"
                  ? "text-green-600 dark:text-green-400"
                  : "text-foreground"
              }`}
            >
              {event.statusName}
            </strong>
            {event.location && (
              <span className="text-xs text-muted-foreground">{event.location}</span>
            )}
            {formatEventDate(event.timestamp) && (
              <span className="text-xs text-orange-600 dark:text-orange-500 mt-1">
                {formatEventDate(event.timestamp)}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
