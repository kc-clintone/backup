import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EventCard({ event }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-24 w-full overflow-hidden">
        <img
          src={event.banner}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-3 space-y-2">
        <div className="flex items-start gap-2">
          <Avatar className="h-6 w-6 shrink-0">
            <AvatarImage
              src={event.creator.avatar}
              alt={event.creator.username}
            />
            <AvatarFallback className="text-xs">
              {event.creator.username?.[0]?.toUpperCase() || "E"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold leading-tight line-clamp-2">
              {event.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              {event.creator.username}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {event.description}
        </p>
      </CardContent>
    </Card>
  );
}
