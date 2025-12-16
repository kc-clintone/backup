import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Coffee, ShoppingBag } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function FeedItem({ item }) {
  const [expanded, setExpanded] = useState(false);
  const desc = item.description || "";
  const showMore = desc.length > 150;

  return (
    <Card className="overflow-hidden">
      {item.media && (
        <div className="w-full aspect-video bg-muted rounded-t-xl overflow-hidden">
          {item.media.type === "video" ? (
            <video
              src={item.media.url}
              controls
              className="w-full h-full object-cover"
              poster={item.media.thumbnail}
            />
          ) : item.media.type === "image" ? (
            <img
              src={item.media.url}
              alt={item.media.alt || item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="text-center space-y-2">
                <div className="text-4xl">📄</div>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.media.alt || "Document"}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={item.media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      <CardContent className="p-4 md:p-6 space-y-4">
        <div>
          <p className="text-sm text-red-500 font-semibold mb-2">
            {item.title}
          </p>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <span className="text-xs text-muted-foreground">
            {dayjs(item.createdAt).fromNow()}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Avatar className="h-6 w-6">
            <AvatarImage src={item.user.avatar} alt={item.user.username} />
            <AvatarFallback>
              {item.user.username?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <span className="font-normal text-foreground">
            {item.user.username}
          </span>
        </div>
        {desc && (
          <>
            <p className="text-sm text-muted-foreground">
              {expanded || !showMore ? desc : desc.substring(0, 150) + "..."}
            </p>
            {showMore && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-primary hover:underline mt-1"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
          </>
        )}
      </CardContent>

      <CardFooter className="p-4 md:p-6 pt-0 flex flex-col ">
        <div className="justify-center gap-3 flex w-full mb-4">
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="py-6 sm:flex-initial bg-black"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Unlock with membership
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="lg:px-24 sm:px-20 py-6 sm:flex-initial"
            >
              <Coffee className="mr-2 h-4 w-4" />
              Buy for KES 500
            </Button>
          </div>
        </div>

        <div className="flex gap-2 w-full">
          <div className="gap-4 flex">
            <Button variant="ghost" size="sm" className="gap-2 border border-neutral-950 rounded-full">
              <Heart className="h-4 w-4" />
              {item.likes || 0}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 border border-neutral-950 rounded-full">
              <MessageCircle className="h-4 w-4" />
              {item.comments || 0}
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
