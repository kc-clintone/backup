import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import EventCard from "./EventCard";
import RecommendedUserCard from "./RecommendedUserCard";
import { mockEvents, mockRecommendedUsers } from "@/data/mockAsideData";
import { ChevronRight } from "lucide-react";

export default function FeedAside() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Upcoming Events</h2>
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate("/events")}
        >
          See more
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Recommended for you</h2>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Creators you might like</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] px-3 pb-3">
              <div className="grid grid-cols-2 gap-3">
                {mockRecommendedUsers.map((user) => (
                  <RecommendedUserCard key={user.id} user={user} />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
