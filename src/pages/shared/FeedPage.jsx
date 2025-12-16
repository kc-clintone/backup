import { useState, useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import FeedItem from "@/components/FeedItem";
import FeedAside from "@/components/FeedAside";
import { mockFeedData } from "@/data/mockFeedData";
import { Loader2Icon } from "lucide-react";

export default function FeedPage() {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFeedData(mockFeedData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <MainLayout asideContent={<FeedAside />}>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Feed</h1>
          <p className="text-muted-foreground">
            Browse and discover new content
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 justify-center flex flex-col items-center">
            <Loader2Icon className="animate-spin size-8"/>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {feedData?.map((item) => (
              <FeedItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
